hexo.extend.helper.register('wordcount', function (content) {
	'use strict';
	content = content.replace(/(<!--[^-]*-->)/g, '');//去注释
	content = content.replace(/\s\s/g, '');//去多余空白字符
	content = content.replace(/\W\s/g, '');//符号后空白符
	var cn = content.match(/[\u4E00-\u9FA5]/g) || [];
	var en = content.match(/(\W*\w*\W)/g) || [];
	return cn.length + en.length;
});

hexo.extend.helper.register('totalcount', function (site) {
	'use strict';
	var count = 0;
	var fs = require('fs');
	site.posts.forEach(function (post) {
		var content = post.content;
		content = content.replace(/(<!--[^-]*-->)/g, '');//去注释
		content = content.replace(/\s\s/g, '');//去多余空白字符
		content = content.replace(/\W\s/g, '');//符号后空白符
		var cn = content.match(/[\u4E00-\u9FA5]/g) || [];
		var en = content.match(/(\W*\w*\W)/g) || [];
		count += cn.length + //中文
			en.length;  //英文
	});
	return count;
});
