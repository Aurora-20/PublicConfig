/**
 * Update : 2023/11/01 14:55:44
 * 1. 本脚本已加密；
 * 2. 功能：为 SYN 已订阅用户快速在 SubStore 中添加低倍率节点；
 * 3. 感谢 @baixiaofei233 提供的思路；
 * 4. 请在 SubStore 中使用，具体使用：编辑->脚本操作->类型（链接）->
 * 填入本脚本链接（）；
 *
 */

function operator(proxies) {
  proxies.push(
    Object.assign({}, proxies[0], {
      port: 50009,
      name: "🇱🇺 LU 硝酸二甲酯 0.01x",
    })
  );
  proxies.push(
    Object.assign({}, proxies[0], {
      port: 50012,
      name: "🇸🇬 SG 苯巴比妥钠 0.01x",
    })
  );
  return proxies;
}
