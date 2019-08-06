<template>

<div id="outerbox">
  <!-- <div id="sliderbox">
    <img src="https://images.unsplash.com/photo-1526489561696-1a5a2b82de4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" height="600px" width="600px" alt="">
    <img src="https://images.unsplash.com/photo-1554701417-aac42d52eebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1151&q=80" height="600px" width="600px" alt="">
    <img src="https://images.unsplash.com/photo-1519114563721-eb52c00b9129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" height="600px" width="600px" alt="">
    <img src="https://images.unsplash.com/photo-1457481599234-8e8612f52f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="600px" width="600px" alt="">
  </div> -->
</div>
</template>
<script>
export default {
  data: () => ({
  })
}
</script>
<style scoped>

#outerbox{
  align-self: center;
  width: 600px;
  overflow: hidden;
}
#sliderbox{
  position: relative;
  width: 2400px;
  animation-name: Xnames;
  animation-duration: 20s;
  animation-iteration-count: infinite;
}
#sliderbox img{
  float: left;
}
@keyframes Xnames {
0%
{
left: 0px;
}
20%
{
left: 0px;
}
25%
{
left:-600px;
}
45%
{
left: -600px;
}
50%{
left:-1200px;
}
75%
{
left:-1800px;
}
95%
{
left:-1800px;
}
100%
{
left: -2400px;
}
}
</style>
