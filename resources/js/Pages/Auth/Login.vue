<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import AuthenticationCard from "@/Components/AuthenticationCard.vue";
import AuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";

defineProps({
  canResetPassword: Boolean,
  status: String,
});

const form = useForm({
  email: "",
  password: "",
  remember: false,
});

const submit = () => {
  form
    .transform((data) => ({
      ...data,
      remember: form.remember ? "on" : "",
    }))
    .post(route("login"), {
      onFinish: () => form.reset("password"),
    });
};
</script>

<template>
  <Head title="Log in" />
  <AuthLayout>
    <AuthenticationCard>
      <template #logo>
        <AuthenticationCardLogo />
      </template>

      <div class="mb-8 text-center">
        <p>Please sign-in to your account and start the adventure</p>
      </div>

      <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
      </div>

      <form @submit.prevent="submit">
        <v-text-field
          label="Email"
          variant="outlined"
          id="email"
          v-model="form.email"
          type="email"
          class="mt-1 block w-full"
          required
          autofocus
          autocomplete="username"
        ></v-text-field>
        <InputError class="mt-2" :message="form.errors.email" />

        <VTextField
          label="Password"
          variant="outlined"
          id="password"
          v-model="form.password"
          type="password"
          class="mt-1 block w-full"
          required
          autocomplete="current-password"
        ></VTextField>
        <InputError class="mt-2" :message="form.errors.password" />

        <div class="flex justify-between">
          <label class="flex items-center align-middle">
            <VCheckbox
              v-model:checked="form.remember"
              color="primary"
              label="Remember me"
              name="remember"
            />
          </label>
          <Link
            v-if="canResetPassword"
            :href="route('password.request')"
            class="mt-4 text-primary font-bold hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Forgot password?
          </Link>
        </div>

        <div class="flex items-center justify-end">
          <PrimaryButton
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Log in
          </PrimaryButton>
        </div>
      </form>
      <div class="mt-5 flex justify-center">
        <span>New to our Application?</span>
        <Link
          :href="route('register')"
          class="ml-1 text-primary font-bold hover:text-gray-900"
          >Register here</Link
        >
      </div>
    </AuthenticationCard>
  </AuthLayout>
</template>
