<template>
	<section>
		<div>
			<h3>{{ fullName }}</h3>
			<BaseBadge :type="role" :caption="roleAsUppercase" />
		</div>
		<p>{{ infoText }}</p>
	</section>
</template>

<script>
import BaseBadge from '@/components/Badges/BaseBadge';

export default {
	name: 'UserInfo',
	components: {
		BaseBadge
	},
	props: ['fullName', 'infoText', 'role'],
	computed: {
		roleAsUppercase() {
			return this.role.toUpperCase();
		}
	}
};
</script>

<style lang="scss" scoped>
section {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
