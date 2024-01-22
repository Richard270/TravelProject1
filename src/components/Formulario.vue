<template>
    <b-container fluid>
        <b-row>
            <div id="title" class="my-5">
                <h2 class="my-3">Formulario</h2>
                <div class="my-3">
                    <div>
                        <b-form>
                            <b-form-group id="" label="Email address:">
                                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"
                                    required></b-form-input>
                            </b-form-group>
                            <b-form-group id="" label="Email address:">
                                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"
                                    required></b-form-input>
                            </b-form-group>
                            <b-button type="submit" variant="primary">Submit</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>
                    </div>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                name: '',

            },
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>

<style></style>