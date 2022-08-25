<template>
    <div>
        <div class="row">
            <div class="col-md-4">

            </div>
            <div class="col-md-4">
                <form action="#" method="post">
                    <div class="form-group">
                        <label for="">Title</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Eter Title"
                            v-model="form.title">
                    </div>
                    <div class="form-group">
                        <label for="">Date</label>
                        <input type="date" class="form-control form-control-sm" v-model="form.date">
                    </div>
                    <div class="form-group">
                        <label for="">Description</label>
                        <textarea class="form-control" rows="10" v-model="form.description"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-success btn-sm mt-2 float-end" @click="save()" v-if="!update">Save</button>
                        <button type="button" class="btn btn-success btn-sm mt-2 float-end" @click="updateData(this.form.index)" v-else>Update</button>
                    </div>
                </form>
            </div>
            <div class="col-md-4">

            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in this.allData" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.description }}</td>
                    <td>
                        <span class="" v-if="!item.status">
                            <i class="fa-solid fa-xmark"></i>
                        </span>
                        <span class="" v-else>
                            <i class="fa-solid fa-check"></i>
                        </span>
                    </td>
                    <td>
                        <button class="btn btn-link" v-if="!item.status" @click="completed(index)">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button type="button" class="btn btn-link" @click="edit(index)">Edit</button>
                        <button type="button" class="ms-2 btn btn-link" @click="deleteData(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "ToDoList",
    data() {
        return {
            form: {},
            allData:[],
            update:false,
        }
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        save(){
            let data = localStorage.getItem("allData");
            this.alldata = data;
            this.form.status = false;
            this.allData.push(this.form);
            this.form = {};
            localStorage.setItem('allData', JSON.stringify(this.allData));
            this.fetchData();
        },
        edit(index){
            this.update=true;
            this.form.index = index;
            this.form.title = this.allData[index].title;
            this.form.date = this.allData[index].date;
            this.form.description = this.allData[index].description;
        },
        updateData(index){
            this.allData[index]=this.form;
            localStorage.setItem('allData', JSON.stringify(this.allData));
            this.form={};
            this.update=false;
        },
        fetchData(){
            this.allData = JSON.parse(localStorage.getItem('allData'));
        }, 
        deleteData(index){
            this.allData.splice(index, 1);
            localStorage.setItem('allData', JSON.stringify(this.allData));
            this.fetchData();
        },
        completed(index){
            this.allData[index].status = true;
            localStorage.setItem('allData', JSON.stringify(this.allData));
        },
    }
}
</script>