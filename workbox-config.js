module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,mp3,js,css,jpg,ps1,jpeg,pdf,png,txt,ttf,sk2,bak,dwg,heic,MOV,1,gif,webp,svg,json,mb,log,cif,pdb,mol,sdf,DX,jdx,dx,xml,php,EPRT,SLDPRT,STL,cjs,ts}'
	],
	swDest: 'sw.js',
	swSrc: 'sw.js',
	  // Configure maximumFileSizeToCacheInBytes to increase the precaching limit
	  maximumFileSizeToCacheInBytes: 25 * 1024 * 1024, // 5 MB



};