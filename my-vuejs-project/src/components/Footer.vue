<template>
	<div class="detail">
		<template v-if="detail">
			 <h2>好好</h2>
		</template>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: "common-footer",
	data: function() {
		return {
			 detail:true
		}
	},
	mounted() {
	
	}
}
</script>

<style scoped lang="scss">
	
</style>