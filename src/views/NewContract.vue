<template>
  <div class="main">
    <h1 class="text-center">
      שלבים לאימות נתונים:
    </h1>
    <stepper-contract/>
  </div>
</template>


<script>
import StepperContract from '@/components/stepper/stepperContract';

export default {
  name: 'NewContract',
  components: {StepperContract }
};
</script>

<style scoped>

</style>
