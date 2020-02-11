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
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="assets in listAssets">
							<td></td>
							<td>{{ assets.code }}</td>
							<td>{{ assets.name }}</td>
							<td  class="text-center"><img v-bind:src=" assets.image" /></td>
							<td nowrap  class="text-center">
								<button class="btn btn-success btn-round btn-sm"  data-toggle="modal" data-target="#exampleModal">Details</button>
							</td>
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
					<form action="/Assets" class="kt-form" method="post">
						<div class="kt-portlet__body">
							<div class="form-group">
								<label><b>Name / Code</b></label>
								<div class="row">
									<div class="col-md-6">
										<input type="text" class="form-control"  placeholder="Code">
									</div>
									<div class="col-md-6">
										<input type="text" class="form-control"  placeholder="Name">
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="descriptions"><b>Descriptions</b></label>
								<div class="row">
									<div class="col-md-12">
										<textarea name="descriptions" class="form-control" rows="3" id="descriptions"></textarea>
									</div>
								</div>
							</div>


								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<label for=""><b>Tanggal Beli</b></label>
											<date-picker v-model="date1" lang="en" type="date" name="date1" format="YYYY-MM-DD"></date-picker>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for=""><b>Jumlah</b></label>
											<input type="text" class="form-control"  placeholder="satuan : unit/buah/blok">
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for=""><b>Expire Date</b></label>
											<date-picker v-model="date3" lang="en" type="date" name="date3" format="YYYY-MM-DD"></date-picker>
											<!-- <div class='input-group date' id='datetimepicker3'>
												<input type='text' class="form-control" />
												<span class="input-group-addon">
													<span class="glyphicon glyphicon-calendar"></span>
												</span>
											</div> -->
										</div>
									</div>
								</div>

							<div class="form-group">
								<label ><b>Assets Picture</b></label>
								<div></div>
								<div class="custom-file">
									<input type="file" class="custom-file-input" id="customFile">
									<label class="custom-file-label" for="customFile">Choose file</label>
									<span>Attachments : STNK, BPKB, Nota beli, etc.</span>
								</div>
							</div>
							<div class="custom-file">
								<label ><b>Set Alert</b></label>
							</div>
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<label for="">Tanggal Service</label>
											<date-picker v-model="date1" lang="en" type="date" name="date1" format="YYYY-MM-DD"></date-picker>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="">Ganti Oli</label>
											<date-picker v-model="date2" lang="en" type="date" name="date2" format="YYYY-MM-DD"></date-picker>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="">Perpanjang surat Kendaraan</label>
											<date-picker v-model="date3" lang="en" type="date" name="date3" format="YYYY-MM-DD"></date-picker>
											<!-- <div class='input-group date' id='datetimepicker3'>
												<input type='text' class="form-control" />
												<span class="input-group-addon">
													<span class="glyphicon glyphicon-calendar"></span>
												</span>
											</div> -->
										</div>
									</div>
								</div>
						</div>
						<div class="kt-portlet__foot">
							<div class="kt-form__actions ">
								<button type="submit" class="btn btn-success ">Creat Assets</button>
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
			date1: null,
			date2: null,
			date3: null
		}
	}
};
</script>