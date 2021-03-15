<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>图片上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="alcenter">
            <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :before-remove="beforeRemove"
                :on-success="handleSuccess"
                :on-error="handError"
                 multiple
                :limit="5"
                :on-exceed="handleExceed"
                :file-list="fileList"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    name: 'food.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    name: 'food2.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ]
        };
    },
    methods: {
        handlePreview(file) {
            //点击文件列表中已上传的文件时的钩子
            this.$message.warning(`${file.name}已在上传列表！`);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        handleSuccess(response, file, fileList) {
            this.$message({
                message: '上传成功',
                type: 'success'
            });
        },
        handError(err, file, fileList) {
            this.$message.error('上传失败！' + err);
        }
    }
};
</script>
