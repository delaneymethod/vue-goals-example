<template>
	<section>
		<BaseCard>
			<template v-slot:header>
				<h3>{{ fullName }}</h3>
				<BaseBadge :type="role" :caption="roleAsUppercase" />
			</template>
			<template v-slot:default>
				<p>{{ infoText }}</p>
			</template>
		</BaseCard>
	</section>
</template>

<script>
import BaseCard from '@/components/Badges/UI/BaseCard';
import BaseBadge from '@/components/Badges/UI/BaseBadge';

export default {
	name: 'UserInfo',
	components: {
		BaseCard,
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

<style lang="scss" scoped></style>
