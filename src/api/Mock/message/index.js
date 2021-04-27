import Mock from "mockjs";
import qs from "querystring";
import avatar from "@/assets/image/avatar.jpg";

Mock.mock("/api/message", "post", {
  code: 200,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: '@datetime()',
    "avatar|1": [
      avatar
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 200,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: '@datetime()',
          "avatar|1": [
            avatar
          ],
        },
      ],
    },
  });
});
