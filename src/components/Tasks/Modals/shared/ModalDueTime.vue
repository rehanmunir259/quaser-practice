<template>
  <div class="row q-mb-sm" v-if="dueDate">
          <q-input
            outlined
            label="Due time"
            :value="dueTime"
            class="col"
            @input="$emit('update:dueTime',$event)"
          >
            <template v-slot:append>
              <q-icon
                v-if="dueTime"
                name="close"
                @click="$emit('update:dueTime','')"
                class="cursor-pointer"
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time @input="$emit('update:dueTime',$event)" :value="dueTime" with-seconds format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
</template>

<script>
export default {
props:['dueDate','dueTime']
}
</script>

<style>

</style>