# js-animation

#### js-animation은 간편하게 사용할 수 있는 자바스크립트 애니메이션 라이브러리입니다.

#### js-animation is an easy-to-use JavaScript animation library.

## Feature

<details>
<summary style="font-size: 18px">changeStickyColor</summary>
<div markdown="1">

```html
<div class="scroll-container">
  <div id="item"></div>
</div>
```

```css
.scroll-container {
  position: relative;
  top: 700px;
  left: 0;
  width: 100%;
  height: 350px;
  background-color: orange;
}

#item {
  width: 50px;
  height: 50px;
  background-color: rgb(70, 240, 160);
}
```

```javascript
changeStickyColor("item", "scroll-container", {
  top: 0,
  left: 300,
  colorTo: "rgb(20, 122, 40)",
});
```

![changeStickyColor](https://github.com/2YH02/tic-tac-toe/assets/125336070/4f18c848-2bbd-4467-8498-daead1547307)

</div>
</details>
