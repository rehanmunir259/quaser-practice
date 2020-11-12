<template>
   <div class="row q-mb-sm">
          <div class="col">
            <q-input
              autofocus
              outlined
              @input="$emit('update:name',$event)"
              :value="name"
              :rules="[(val) => !!val || 'Field is required']"
              label="Task Name"
              ref="name"
            >
              <template v-slot:append>
                <q-icon
                  v-if="name"
                  name="close"
                  @click="$emit('update:name','')"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
        </div>
</template>

<script>
export default {
    props:['name']

}
</script>

<style>

</style>