<template>
	<section>
		<BaseCard>
			<template v-slot:header>
				<h2>Available Badges</h2>
			</template>
			<template v-slot:default>
				<ul>
					<li>
						<BaseBadge type="admin" caption="ADMIN" />
					</li>
					<li>
						<BaseBadge type="author" caption="AUTHOR" />
					</li>
				</ul>
			</template>
		</BaseCard>
	</section>
</template>

<script>
import BaseCard from '@/components/Badges/BaseCard';
import BaseBadge from '@/components/Badges/BaseBadge';

export default {
	name: 'BadgeList',
	components: {
		BaseCard,
		BaseBadge
	}
};
</script>

<style lang="scss" scoped>
section h2 {
	margin: 0.5rem 0;
	color: #3a3a3a;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
}

li {
	margin-right: 1rem;
}
</style>
