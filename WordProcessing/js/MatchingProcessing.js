// 给第一个按钮添加点击事件监听器
btn1.addEventListener("click", function () {
  // 获取输入框内容
  let text1 = input.value;
  let matchTexts = document.querySelectorAll("#matchContainer textarea");
  let replaceTexts = document.querySelectorAll("#replaceContainer textarea");
  let result = text1;

  // 逐个替换文本
  for (let i = 0; i < matchTexts.length; i++) {
    let matchText = matchTexts[i].value;
    let replaceText = replaceTexts[i].value;
    result = result.replace(new RegExp(matchText, "g"), replaceText);
  }

  // 将替换后的文本显示在输出框
  output.value = result;
});

document.getElementById('copyBtn').addEventListener('click', function () {
  var textarea = document.getElementById('output');
  textarea.select();
  document.execCommand('copy');
})  