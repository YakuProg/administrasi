<template>
  <div class="assets" id="assets">
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
				<tr v-for="n in 4">
					<td></td>
					<td>{{ n }}</td>
					<td>61715-075</td>
					<td  class="text-center"><img src="https://lalityanindya.files.wordpress.com/2017/11/purchase-guy.png" alt=""  width="100" height="100"  class="img-thumbnail"></td>
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
							<input type="text" class="form-control"  placeholder="Name">
						</div>
						<div class="col-md-6">
							<input type="text" class="form-control"  placeholder="Code">
						</div>
					</div>
				</div>
				<div class="form-group">
					<label for="descriptions"><b>Descriptions</b></label>
					<div class="row">
						<div class="col-md-12">
							<textarea name="descriptions" class="form-control" rows="6" id="descriptions"></textarea>
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
<div class="row">
	<div class="col-md-2">
		<label for="" class=" col-form-label"><b>Set Alert</b></label>
	</div>
	<div class="col-md-3">
		<div class="form-group">
			<label for="">Tanggal Service</label>
			<div class='input-group date' id='datetimepicker1'>
				<input type='text' class="form-control" />
				<span class="input-group-addon">
					<span class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>
	</div>
	<div class="col-md-3">
		<div class="form-group">
			<label for="">Ganti Oli</label>
			<div class='input-group date' id='datetimepicker2'>
				<input type='text' class="form-control" />
				<span class="input-group-addon">
					<span class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-group">
			<label for="">Perpanjang surat Kendaraan</label>
			<div class='input-group date' id='datetimepicker3'>
				<input type='text' class="form-control" />
				<span class="input-group-addon">
					<span class="glyphicon glyphicon-calendar"></span>
				</span>
			</div>
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
					<tr v-for="assets in 6">
						<th scope="row">{{assets}}</th>
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
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'assets'
};
</script>
        <script type="text/javascript">
            $(function () {
                $('#datetimepicker1').datetimepicker();
                $('#datetimepicker2').datetimepicker();
                $('#datetimepicker3').datetimepicker();
            });
        </script>