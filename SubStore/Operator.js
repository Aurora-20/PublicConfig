/**
 * Update : 2023/11/01 14:55:44
 *
 * 1. 功能：为 SYN 已订阅用户快速在 SubStore 中添加低倍率节点；
 * 2. 感谢 @baixiaofei233 提供的思路；
 * 3. 请在 SubStore 中使用，具体使用：编辑->脚本操作->类型（链接）->
 * 填入本脚本链接（https://github.com/Aurora-20/PublicConfig/raw/main/SubStore/Operator.js）；
 *
 */

function operator(proxies) {
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "59.81.87.108",
      port: 50009,
      name: "🇱🇺 LU 硝酸二甲酯 0.01x",
    })
  );
  proxies.push(
    Object.assign({}, proxies[proxies.length - 1], {
      server: "59.81.87.108",
      port: 50012,
      name: "🇸🇬 SG 苯巴比妥钠 0.01x",
    })
  );
  return proxies;
}
