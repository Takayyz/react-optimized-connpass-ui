const axios = require("axios");

// 全てのイベントをconnpass_APIより取得する。
exports.all_events = function (req, res) {
  axios
    .get("https://connpass.com/api/v1/event/", {
      params: {
        keyword: req.query.keyword,
        ymd: req.query.ymd,
        order: req.query.order,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
