<template>
	<button lass="fency-btn">
		<slot></slot>
	</button>
</template>
            
<script>
export default {
    name: 'BaseButton',
}

</script>

<style>
button {
  color: #000;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
