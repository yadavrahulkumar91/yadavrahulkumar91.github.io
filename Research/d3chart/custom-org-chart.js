const data = [
    { name: 'Mike', title: 'President', children: [
      { name: 'Jim', title: 'VP' },
      { name: 'Alice', title: 'VP', children: [
        { name: 'Bob', title: 'Manager' },
        { name: 'Carol', title: 'Manager', children: [
          { name: 'Rahul', title: 'Manager', children: [
            { name: 'Hi' },
            { name: 'Kumar', title: 'Rahul the best' },
            { name: 'Yadav' },
            { name: 'Raman' },
          ] },
          { name: 'Hari' },
          { name: 'Rita' },
          { name: 'Shova' },
        ] },
      ] },
    ] },
  ];
  
  const svg = d3.select('#org-chart')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .append('g')
    .attr('transform', 'translate(50, 50)');
  
  const treeLayout = d3.tree().nodeSize([180, 100]);
  const root = d3.hierarchy(data[0]);
  const treeData = treeLayout(root);
  
  const link = svg.selectAll('.link')
    .data(treeData.links())
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('d', d3.linkVertical()
      .x(d => d.x)
      .y(d => d.y)
    );
  
  const node = svg.selectAll('.node')
    .data(treeData.descendants())
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.x}, ${d.y})`);
  
  node.append('rect')
    .attr('width', 120)
    .attr('height', 50)
    .attr('x', -60)
    .attr('y', -25)
    .attr('rx', 10)
    .attr('ry', 10)
    .attr('fill', 'aquamarine')
    .attr('stroke', 'black');
  
  node.append('text')
    .attr('dy', 5)
    .text(d => d.data.name);
  
  node.append('text')
    .attr('dy', 20)
    .style('font-size', '12px')
    .text(d => d.data.title);
  
  // Add collapse/expand functionality
  node.on('click', (event, d) => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    treeData.descendants().forEach(update);
    update(d);
  });
  
  function update(source) {
    const duration = d3.event && d3.event.altKey ? 1000 : 250;
    const nodes = treeData.descendants().reverse();
    const links = treeData.links();
  
    treeLayout(root);
  
    const transition = svg.transition().duration(duration);
  
    // Update links
    link
      .data(links, d => d.target.id)
      .join(
        enter => enter.append('path')
          .attr('class', 'link')
          .attr('d', d3.linkVertical()
            .x(d => source.x)
            .y(d => source.y)
          )
          .attr('fill', 'none')
          .attr('stroke', 'black')
          .attr('stroke-opacity', 0.4)
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '2,2'),
        update => update,
        exit => exit.remove()
      )
      .transition(transition)
      .attr('d', d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y)
      );
  
    // Update nodes
    node
      .data(nodes, d => d.id)
      .join(
        enter => {
          const g = enter.append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${source.x},${source.y})`)
            .attr('fill-opacity', 0)
            .attr('stroke-opacity', 0)
            .on('click', (event, d) => {
              if (d.children) {
                d._children = d.children;
                d.children = null;
              } else {
                d.children = d._children;
                d._children = null;
              }
              update(d);
            });
  
          g.append('rect')
            .attr('width', 120)
            .attr('height', 50)
            .attr('x', -60)
            .attr('y', -25)
            .attr('rx', 10)
            .attr('ry', 10)
            .attr('fill', 'aquamarine')
            .attr('stroke', 'black');
  
          g.append('text')
            .attr('dy', 5)
            .text(d => d.data.name);
  
          g.append('text')
            .attr('dy', 20)
            .style('font-size', '12px')
            .text(d => d.data.title);
  
          return g;
        },
        update => update,
        exit => {
          const g = exit.transition(transition)
            .attr('transform', d => `translate(${source.x},${source.y})`)
            .attr('fill-opacity', 0)
            .attr('stroke-opacity', 0)
            .remove();
  
          g.select('rect')
            .attr('width', 120)
            .attr('height', 50)
            .attr('x', -60)
            .attr('y', -25)
            .attr('rx', 10)
            .attr('ry', 10)
            .attr('fill', 'aquamarine')
            .attr('stroke', 'black');
  
          g.select('text')
            .attr('dy', 5)
            .text(d => d.data.name);
  
          g.select('text')
            .attr('dy', 20)
            .style('font-size', '12px')
            .text(d => d.data.title);
  
          return g;
        }
      )
      .transition(transition)
      .attr('transform', d => `translate(${d.x},${d.y})`)
      .attr('fill-opacity', 1)
      .attr('stroke-opacity', 1);
  }
  
  update(root);
  