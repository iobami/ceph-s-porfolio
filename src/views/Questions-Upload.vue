<template>
  <div class="upload-container">
    <div class="upload-card-offset">
      <span>Excel Sheet</span>
      <span style="color: #D3D3D3; font-size: 11px;">Upload questions from your excel sheet</span>
    </div>
    <div class="upload-card">
      <hr>
      <div class="upload-card-body">
        <div style="float: left">
          <h4>Select File</h4>
          <div>
            <label for="file-upload" class="file-upload" v-if="!uploadingImage">
              Choose File</label>&nbsp;&nbsp;{{ fileName }}
            <input @change="readURL" ref="myFiles" id="file-upload"
                   type="file" name="myFile" style="display: none">
          </div>
        </div>
        <div style="float: right">
          <h4 style="text-align: center">
            Select Subject
          </h4>
          <select style="cursor: pointer; margin-top: 13px"
                  class="form-control" id="category" required>
            <option value="" disabled selected>Select a Category</option>
            <option value="Eng">English</option>
            <option value="Gen">General</option>
          </select>
        </div>
      </div>
      <div style="clear: both; text-align: center">
        <button class="btn badge-info">Upload</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload',
  mounted() {
    // this.$store.commit('setShowNav', true);
    // console.log(this.showNav);
  },
  data() {
    return {
      fileName: '',
      uploadingImage: false,
    };
  },
  methods: {
    readURL() {
      // this.fileUploadMessage = '';
      const fileData = this.$refs.myFiles;
      // const fileSize = fileData.files[0].size;
      const fileNameArray = fileData.files[0].name.split('.');
      const fileExtension = fileNameArray[fileNameArray.length - 1].toLowerCase();
      if (['csv', 'xlsx', 'xls'].includes(fileExtension) === false) {
        this.fileUploadMessage = 'This file is not in a CSV, XLS or XLSX format.';
        return;
      }
      this.fileName = fileData.files[0].name;
    },
  },
};
</script>
<style scoped>
  .upload-container {
    background-color: #F0F0F0;
    min-height: 100vh;
    padding-top: 72px;
  }
  .upload-card {
    min-height: 50vh;
    max-height: 50vh;
    background-color: white;
    width: 65%;
    margin: -69px auto;
    border-radius: 5px;
    z-index: 0;
    position: relative;
    box-shadow: 0 2px 8px 2px #B8B8B8;
    padding: 72px 22px 0 22px;
  }
  .upload-card-offset {
    min-height: 13vh;
    max-height: 13vh;
    background-color: #3C45B0;
    /*background-color: rgba(0,0,0,.87);*/
    width: 63%;
    margin: 0 auto;
    border-radius: 5px;
    z-index: 1;
    position: relative;
    padding: 14px;
    box-shadow: 0 2px 8px 2px #B8B8B8;
  }
  .upload-card-offset span {
    display: block;
    color: #DCDCDC;
    padding: 4px;
  }
  .file-upload {
    padding: 4px;
    margin: 5px;
    border: 2px solid #3C45B0;
    cursor: pointer;
    color: #3C45B0;
  }
  .file-upload:hover {
    padding: 4px;
    background-color: #3C45B0;
    border: 2px solid #3C45B0;
    transition-duration: 250ms;
    transition-timing-function: ease-in;
    cursor: pointer;
    color: white;
  }
  .upload-card-body {
    width: 60%;
    margin: 52px auto;
  }
  .upload-card button {
    clear: both;
    margin: 36px auto;
    background-color: #3C45B0;
    /*padding: 6px;*/
  }
  .upload-card button:hover {
    background-color: #3C45B0;
    color: white;
    transition-duration: 250ms;
    transition-timing-function: ease-in;
    box-shadow: 0 3px 8px 2px #B8B8B8;
  }
</style>
