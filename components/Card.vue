<template>
  <a-card style="width: 100%; border-radius: 10px;">
    <div class="gutter-example">
      <a-row :gutter="32" type="flex" justify="space-around" align="middle">
        <a-col class="gutter-row" :xs="24" :md="4">
          <div class="gutter-box detail strong">
            #3070RX
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="24" :md="6">
          <div class="gutter-box detail">
            Due 19 November 2022
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="24" :md="5">
          <div class="gutter-box detail">
            Anita Wainwright
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="24" :md="5">
          <div class="gutter-box price strong">
            £1,800.90
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="24" :md="4">
          <div class="gutter-box" style="text-align: center;">
            <a-tag color="green" style="width: 100%; padding: 5px; text-align: center; font-size: medium; word-spacing: 5px;">
              ● Paid
            </a-tag>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'CardComponent'
}
</script>

<style scoped>
.price {
  font-size: large;
  text-align: right;
}

.detail {
  font-size: medium;
}

.strong {
  font-weight: bold;
}
</style>