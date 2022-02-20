<template>
  <h1>Add Person</h1>
  <Form v-slot="{ errors, values }" @submit="handleSubmit">
    <el-row :gutter="20">
      <el-col :span="24">
        <Field as="input" type="text" name="name" rules="required|min:8" />
      </el-col>
      <el-col :span="24">
        <Field as="input" type="email" name="email" rules="required|email" />
      </el-col>
      <el-col :span="24">
        <Field as="input" type="text" name="address" rules="required" />
      </el-col>
    </el-row>
    <button type="submit">Submit</button>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>Form Values:</p>
        <pre>{{ values }}</pre>
      </el-col>
      <el-col :span="24">
        <p>Form Validations:</p>
        <pre>{{ errors }}</pre>
      </el-col>
    </el-row>
  </Form>
</template>

<script>
import { configure, Form, Field, defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
export default {
  name: "PersonFormPresentation",
  components: { Form, Field },
  setup() {
    defineRule("required", required);
    defineRule("email", email);
    defineRule("min", min);
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit(values) {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  },
  mounted() {
    configure({
      validateOnInput: true,
    });
  },
};
</script>
