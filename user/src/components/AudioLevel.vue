<template>
  <div class="audio-anim-frame">
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block first-block"></div>
    <div class="audio-anim-block second-block"></div>
    <div class="audio-anim-block third-block"></div>
    <div class="audio-anim-block fourth-block"></div>
    <div class="audio-anim-block fourth-block"></div>

  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    text-align: center;
}
.audio-anim-block {
   display: inline-block;
   min-width: 8px;
   height: 10px;
   background-color: #757575;
   display: -moz-inline-box;
   justify-content: center;
   align-items:center;
}
.audio-anim-block.first-block{
    animation-name: first-block;
    animation-duration: 1.1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes first-block {
    100% {transform: scaleY(1);}
    75% {transform: scaleY(0.9);}
    50% {transform: scaleY(0.8);}
    25% {transform: scaleY(0.5);}
    0% {transform: scaleY(1);}
}
.audio-anim-block.second-block{
    animation-name: second-block;
    animation-duration: 1.1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
}
@keyframes second-block {
    100% {transform: scale3d(1,0.5,0.8);}
    25% {transform: scaleY(0.8);}
    50% {transform: scaleY(0.6);}
    100% {transform: scaleY(1);}
}
.audio-anim-block.third-block{
    animation-name: third-block;
    animation-duration: 1.1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes third-block {
    100% {transform: scaleY(1);}
    25% {transform: scaleY(0.7);}
    50% {transform: scaleY(0.4);}
    100% {transform: scaleY(1);}
}
.audio-anim-block.fourth-block{
    animation-name: fourth-block;
    animation-duration: 1.1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes fourth-block {
    100% {transform: scaleY(0.7);}
    75% {transform: scaleY(0.5);}
    50% {transform: scaleY(0.2);}
    25% {transform: scaleY(0.1);}
    100% {transform: scaleY(1);}
}
</style>
