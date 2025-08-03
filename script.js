// script.js
function searchCompany() {
  const companyName = document.getElementById("companyInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!companyName) {
    resultDiv.innerHTML = "<p>请输入公司名称。</p>";
    return;
  }

  // 模拟公司数据库
  const companyData = {
    "阿里巴巴": { industry: "互联网", size: "大型企业", location: "中国杭州" },
    "腾讯": { industry: "科技/社交媒体", size: "大型企业", location: "中国深圳" },
    "字节跳动": { industry: "内容平台", size: "大型企业", location: "中国北京" },
    "小米": { industry: "智能硬件", size: "大型企业", location: "中国北京" }
  };

  const info = companyData[companyName];

  if (info) {
    resultDiv.innerHTML = `
      <h2>${companyName}</h2>
      <p><strong>行业：</strong> ${info.industry}</p>
      <p><strong>规模：</strong> ${info.size}</p>
      <p><strong>所在地：</strong> ${info.location}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>未找到与“${companyName}”相关的公司信息。</p>`;
  }
}

