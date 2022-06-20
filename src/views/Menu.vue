<template>
    <div>
        <home-plans></home-plans>
        <meal-recipes></meal-recipes>
    </div>
</template>

<script>
import HomePlans from "@/components/HomePlans";
import MealRecipes from "@/components/MealRecipes";
export default {
    name: "MenuView",
    components: {
        HomePlans,
        MealRecipes,
    },
};
</script>

<style scoped></style>
