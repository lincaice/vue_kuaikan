<template>
  <div class="outer-box" @mousemove="stopScroll" @mouseleave="openScroll">
    <div class="scroll-box">
      <div class="img-aside-box">
        <div
          class="position-box"
          v-for="(item, index) in realScrollOption.leftSlideArr"
          :key="index"
          :style="positionStyleArr[index]"
        >
          <a href="JavaScript:;">
            <img :src="item.image_url" />
          </a>
        </div>
      </div>
      <div class="img-box">
        <div
          class="position-box"
          v-for="(item, index) in realScrollOption.middleSlideArr"
          :key="index"
          :style="positionStyleArr[index]"
        >
          <a href="JavaScript:;">
            <img :src="item.image_url" />
          </a>
        </div>
      </div>
      <div class="img-aside-box">
        <div
          class="position-box"
          v-for="(item, index) in realScrollOption.rightSlideArr"
          :key="index"
          :style="positionStyleArr[index]"
        >
          <a href="JavaScript:;">
            <img :src="item.image_url" />
          </a>
        </div>
      </div>
    </div>
    <div class="switch-box">
      <div class="left-switch" @click="leftScroll">
        <i class="iconfont icon-icon-arrow-left2"></i>
      </div>
      <div class="right-switch" @click="rightScroll">
        <i class="iconfont icon-icon-arrow-right2"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  props: ["slideArr"],
  data() {
    return {
      scroll: true,
      time: 1000,
      mySlideArr: [],
      // 轮播图图片真实对象
      realScrollOption: {
        size: 0,
        currentPage: 1,
        leftSlideArr: [],
        middleSlideArr: [],
        rightSlideArr: [],
      },
      width: 744,
      // 位置数组
      positionArr: [],
      // 定位样式数组
      positionStyleArr: [],
      // 测试
      animated: false,
    };
  },
  watch: {
    // 是否传入轮播图数据
    slideArr: {
      immediate: true,
      handler(newval) {
        this.mySlideArr = newval;
        if (newval.length !== 0) {
          this.initPositionArr();
          this.openScroll();
        }
      },
    },
    positionArr(newval) {
      for (let index = 0; index < this.positionArr.length; index++) {
        this.positionStyleArr.splice(index, 1, {
          left: this.positionArr[index] + "px",
        });
      }
    },
  },
  methods: {
    initPositionArr(direction = "right") {
      // 初始化轮播对象
      this.realScrollOption.size = this.mySlideArr.length + 1;
      this.realScrollOption.middleSlideArr = [
        ...this.mySlideArr,
        this.mySlideArr[0],
      ];
      this.realScrollOption.leftSlideArr = [
        this.mySlideArr[this.mySlideArr.length - 1],
        ...this.mySlideArr,
      ];
      this.realScrollOption.rightSlideArr = [
        ...this.mySlideArr.slice(1),
        ...this.mySlideArr.slice(0, 2),
      ];
      this.positionArr = [];
      this.positionStyleArr = [];
      if (direction === "right") {
        for (let index = 0; index < this.realScrollOption.size; index++) {
          this.positionArr.push(this.width * index);
          this.positionStyleArr.push({ left: this.width * index + "px" });
        }
      } else {
        for (let index = this.realScrollOption.size - 1; index >= 0; index--) {
          this.positionArr.push(-this.width * index);
          this.positionStyleArr.push({ left: -this.width * index + "px" });
        }
      }
    },
    openScroll() {
      this.$scroll = setInterval(() => {
        this.startScroll();
      }, 4000);
    },
    startScroll() {
      const scrollTimer = setInterval(() => {
        if (this.realScrollOption.currentPage == this.realScrollOption.size) {
          this.realScrollOption.currentPage = 1;
          this.initPositionArr();
        }
        let instance = 10;
        let label = false;
        if (this.positionArr[this.realScrollOption.currentPage] <= 10) {
          instance = this.positionArr[this.realScrollOption.currentPage];
          this.realScrollOption.currentPage++;
          label = true;
        }
        for (let index = 0; index < this.realScrollOption.size; index++) {
          this.positionArr.splice(
            index,
            1,
            (this.positionArr[index] -= instance)
          );
        }
        if (label) clearInterval(scrollTimer);
      }, 8);
    },
    // 左滚动按钮
    leftScroll() {
      const scrollTimer1 = setInterval(() => {
        if (this.realScrollOption.currentPage == 1) {
          this.realScrollOption.currentPage = this.realScrollOption.size;
          this.initPositionArr("left");
        }
        let instance = 10;
        let label = false;
        if (this.positionArr[this.realScrollOption.currentPage - 2] >= -10) {
          instance = -this.positionArr[this.realScrollOption.currentPage - 2];
          this.realScrollOption.currentPage--;
          label = true;
        }
        for (let index = 0; index < this.realScrollOption.size; index++) {
          this.positionArr.splice(
            index,
            1,
            (this.positionArr[index] += instance)
          );
        }
        if (label) clearInterval(scrollTimer1);
      }, 8);
    },
    // 右滚动按钮
    rightScroll() {
      this.startScroll();
    },
    stopScroll() {
      if (this.$scroll) {
        clearInterval(this.$scroll);
        this.$scroll = undefined;
      }
    },
    handleVisiable(e) {
      switch (e.target.visibilityState) {
        case "hidden":
            this.stopScroll();
          break;
        case "visible":
          if (!this.$scroll) {
            this.openScroll();
          }
          break;
      }
    },
  },
  mounted() {
    document.addEventListener("visibilitychange", this.handleVisiable);
  },
};
</script>

<style scoped lang='scss'>
.outer-box {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  .scroll-box {
    display: flex;
    .img-box {
      width: 744px;
      height: 418px;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      .position-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .img-aside-box {
      width: 744px;
      height: 404px;
      opacity: 0.3;
      position: relative;
      margin: 7px 14px;
      border-radius: 8px;
      overflow: hidden;
      .position-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .switch-box {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    // display: flex;
    align-items: center;
    justify-content: center;
    .left-switch,
    .right-switch {
      width: 64px;
      height: 64px;
      background-color: rgba($color: gray, $alpha: 0.6);
      border-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i {
        color: #fff;
        font-size: 26px;
      }
      &:hover i {
        color: yellow;
      }
    }
    .left-switch {
      margin-right: 500px;
    }
    .right-switch {
      margin-left: 500px;
    }
  }
  &:hover .switch-box {
    display: flex;
  }
}
</style>