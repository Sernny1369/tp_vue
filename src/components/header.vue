<template>

<header>
  <nav>
    <ul>
      <li> <a href="#">Home</a></li>
      <li> <a href="#">conncexion</a></li>
    </ul>
  </nav>
</header>

</template>
  
<script>
export default {
    name: 'BaseHeader',
  }
  </script>

<style>
div{
  display: block;
}
header{
  background-color: grey;
  
}
  nav{
    height:80px;
    width: 100%;
    background-color: royalblue;
  }

  nav ul{
    float: inline-end;
    margin-right: 20px;
  }

  nav ul li{
    display: inline-block;
    line-height: 80px;
    margin:0 5px;
  }
</style>
