<style>.datepicker{z-index:1151;}</style>
<template>
	<div class="assets" id="menuAssets">
		<!-- begin:: Subheader -->
		<div class="kt-subheader   kt-grid__item" id="kt_subheader">
			<div class="kt-container  kt-container--fluid ">
				<div class="kt-subheader__main">
					<h3 class="kt-subheader__title"><b>Assest</b></h3>
				<span class="kt-subheader__separator kt-subheader__separator--v"></span>
				</div>
			</div>
		</div>
		<!-- end:: Subheader -->

		<!-- content -->
		<div class="kt-portlet kt-portlet--mobile">
			<div class="kt-portlet__head kt-portlet__head--lg">
				<div class="kt-portlet__head-label">
					<span class="kt-portlet__head-icon">
						<i class="kt-font-brand flaticon2-line-chart"></i>
					</span>
					<h3 class="kt-portlet__head-title">
						List of Assets
					</h3>
				</div>
				<div class="kt-portlet__head-toolbar">
					<div class="kt-portlet__head-wrapper">
						<div class="kt-portlet__head-actions">
							&nbsp;
							<button data-toggle="modal" data-target="#addNewAssets" class="btn btn-brand btn-elevate btn-icon-sm">
								<i class="la la-plus"></i>
								Add New Assets
							</button>
						</div>	
					</div>		
				</div>
			</div>

			<div class="kt-portlet__body">
				<!--begin: Datatable -->
				<table class="table table-striped- table-bordered table-hover table-checkable" id="kt_table_1">
					<thead>
						<tr>
							<th></th>
							<th>Code</th>
							<th>Name</th>
							<th>Image</th>
							<!-- <th>Actions</th> -->
						</tr>
					</thead>
					<tbody>
						<tr v-for="assets in listAssets">
							<td></td>
							<td>{{ assets.code }}</td>
							<td>{{ assets.name }}</td>
							<td  class="text-center"><img v-bind:src=" assets.image" /></td>
							<!-- <td nowrap  class="text-center">
								<button class="btn btn-success btn-round btn-sm"  data-toggle="modal" data-target="#exampleModal">Details</button>
							</td> -->
						</tr>
					</tbody>
				</table>
				<!--end: Datatable -->
			</div>
		</div>
		<!-- end content -->

		<!-- modal Add New Assets -->
		<div class="modal fade" id="addNewAssets" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog  modal-lg" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">New Assets</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form class="kt-form" @submit="formSubmit">
						<div class="kt-portlet__body">
							<div class="form-group">
								<label><b>Name / Code</b></label>
								<div class="row">
									<div class="col-md-6">
										<input type="text" class="form-control" v-model="code"  placeholder="Code">
									</div>
									<div class="col-md-6">
										<input type="text" class="form-control" v-model="name"  placeholder="Name">
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="descriptions"><b>Descriptions</b></label>
								<div class="row">
									<div class="col-md-12">
										<textarea v-model="descriptions" class="form-control" rows="3"></textarea>
									</div>
								</div>
							</div>


								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<label for=""><b>Tanggal Beli</b></label>
											<date-picker lang="en" type="date" v-model="tglBeli" format="YYYY-MM-DD"></date-picker>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for=""><b>Jumlah</b></label>
											<input type="text" class="form-control" v-model="jumlah"  placeholder="satuan : unit/buah/blok">
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for=""><b>Expire Date</b></label>
											<date-picker lang="en" type="date" v-model="expDate" format="YYYY-MM-DD"></date-picker>
										</div>
									</div>
								</div>

							<div class="form-group">
								<label ><b>Assets Picture</b></label>
								<div></div>
								<div class="custom-file">
									<input type="file" class="custom-file-input" name="img" id="img">
									<label class="custom-file-label" for="customFile">Choose file</label>
									<span>Attachments : STNK, BPKB, Nota beli, etc.</span>
								</div>
							</div>
						</div>
						<div class="kt-portlet__foot">
							<div class="kt-form__actions ">
								<button v-on:click="submit" type="formSubmit" class="btn btn-success ">Creat Assets</button>
							</div>
						</div>
					</form>
				</div>
				</div>
			</div>
		</div>
		<!-- end Modal add new assets -->

		<!-- modal service history -->
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Services history (Maintenance)</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="container">
						<table class="table table-bordered">
							<thead>
								<tr>
								<th scope="col">#</th>
								<th scope="col">Date</th>
								<th scope="col">Assets name</th>
								<th scope="col">Details</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="detailAssets in 6">
									<th scope="row">{{detailAssets}}</th>
									<td>12/03/2018</td>
									<td>Otto</td>
									<td>maintenance</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Send message</button>
				</div>
				</div>
			</div>
		</div>
		<!-- end Modal Service history -->
  	</div>
</template>

<script type="text/javascript">

import DatePicker from 'vue2-datepicker';

import 'vue2-datepicker/index.css';

// @ is an alias to /src
export default {
  name: 'menuAssets',
  mounted() {
    return this.$store.dispatch('getListAssets');
  },
  computed: {
    listAssets(){
      return this.$store.getters.listAssets;
    }
  },
	components:{
		DatePicker
	},
	data(){
		return{
			file: ''
		}
	},
	methods: {
		handleFileUpload(){ 
			this.file = this.$refs.file.files[0]; 
		},
		formSubmit(e) {
			e.preventDefault();
			let currentObj = this;
			let input ={
				'code'	: this.code ,
				'name'	: this.name ,
				'descriptions'	: this.descriptions ,
				'tglBeli'	: this.tglBeli ,
				'jumlah'	: this.jumlah ,
				'expDate'	: this.expDate ,
				'img'	: this.img
			}
			console.log(input);
			/*
			this.axios.post('http://localhost:8000/yourPostApi', {
					name: this.name,
					description: this.description
			})
			.then(function (response) {
					currentObj.output = response.data;
			})
			.catch(function (error) {
					currentObj.output = error;
			});
			*/
		},
	}
};
</script>