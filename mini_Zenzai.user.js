// ==UserScript==
// @name			mini_Zenzai
// @author			galuda
// @version			0.0.2
// @description		ZenzaWatch の劣化版
// @namespace		https://github.com/galuda/mini_Zenzai
// @updateURL		https://github.com/galuda/mini_Zenzai/raw/main/mini_Zenzai.user.js
// @downloadURL		https://github.com/galuda/mini_Zenzai/raw/main/mini_Zenzai.user.js
// @supportURL		https://github.com/galuda/mini_Zenzai
// @match			*://www.nicovideo.jp/*
// ==/UserScript==

// プログラムの開始地点
(function () {
	// リンクを抽出
	let links = document.querySelectorAll('a');
	links.forEach(function (link) {
		const url_sm = /.*:\/\/www\.nicovideo\.jp\/watch\/sm.*/;
		let url_check = url_sm.test(link.getAttribute('href'));
		// 動画視聴ページのみ抽出
		if (url_check) {
			link.addEventListener('click', function (e) {
				// ページを開かない
				e.preventDefault();
				console.log(link.getAttribute('href'));
			});
		}
	});
})();
