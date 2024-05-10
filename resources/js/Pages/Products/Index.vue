<script setup>
import { ref } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';

// Dummy data
const dummyData = ref([
  {
    id: 1,
    name: 'Dummy Product 1',
    description: 'Description of Dummy Product 1',
  },
  {
    id: 2,
    name: 'Dummy Product 2',
    description: 'Description of Dummy Product 2',
  },
  {
    id: 3,
    name: 'Dummy Product 3',
    description: 'Description of Dummy Product 3',
  },
]);

// Table headers
const headers = ref([
  { text: 'ID', align: 'start', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Description', value: 'description' },
  // Add more headers as needed
]);

// Pagination and server-side options
const options = ref({
  page: 1,
  itemsPerPage: 10, // Adjust as needed
});

const totalItems = ref(dummyData.value.length);
const loading = ref(false);

// Server-side handler (placeholder)
const getServerData = async () => {
  // Placeholder for server-side logic
};
</script>

<template>
  <AppLayout title="Products">
    <VDataTableServer
      :headers="headers"
      :items="dummyData"
      :total-items="totalItems"
      :loading="loading"
      v-model:options="options"
      :server-items-length="serverItemsLength"
      :items-per-page="options.itemsPerPage"
      @update:options="getServerData"
      class="elevation-1"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <!-- Add more columns as needed -->
        </tr>
      </template>
    </VDataTableServer>
  </AppLayout>
</template>
