<template>
  <ul class="contact-container">
    <li>
      <a>
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>12321435</span>
      </a>
    </li>
    <li>
      <a href="mailto:1033161981@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>12321435</span>
      </a>
    </li>
    <li>
      <a href="tencent://message/?Menu=yes&uin=1033161981&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>1033161981</span>
      </a>
      <div class="pop">
        <img
          src="@/assets/image/QRcode.jpg"
          alt=""
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>ScvioKey</span>
      </a>
      <div class="pop">
        <img
          src="@/assets/image/QRcode.jpg"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/mixins.less";
@import "~@/assets/styles/var.less";
.contact-container {
  color: #fff;
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeigth: 30px;
  li {
    height: @itemHeigth;
    line-height: @itemHeigth;
    margin: 14px 0px;
    position: relative;
    &:hover {
      .pop {
        transform: scale(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .icon {
    font-size: 12px;
    width: 20px;
    span {
      font-size: 12px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeigth + 3px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: .3s;
    img {
      width: 100px;
      height: 100px;
      padding: 10px 15px;
      background: #fff;
      border-radius: 5px;
    }
    &::after {
      width: 8px;
      height: 8px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      bottom: 5px;
      content: "";
      background: #fff;
      position: absolute;
    }
  }
}
</style>