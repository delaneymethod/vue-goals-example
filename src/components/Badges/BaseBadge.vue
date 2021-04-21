<template>
	<span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
	name: 'BaseBadge',
	props: ['type', 'caption'],
	computed: {
		classes() {
			return {
				'badge--admin': this.type === 'admin',
				'badge--author': this.type === 'author'
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.badge {
	display: inline-block;
	padding: 0.5rem 1rem;
	border-radius: 30px;
	background-color: #cccccc;
	color: #2e2e2e;
}

.badge--admin {
	background-color: #810036;
	color: #ffffff;
}

.badge--author {
	background-color: #002c8a;
	color: #ffffff;
}
</style>
