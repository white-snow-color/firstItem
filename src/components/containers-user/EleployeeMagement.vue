<template>
  <div class="EleployeeMagement">
    <div id="EleployeeMagement-con">
      <h3>员工基本信息</h3>
      <!-- 搜索区 -->
      <div class="Elelfor-retrieval" ref="blocks" >
        <!-- 搜索head -->
        <div class="retrieval-header"  >
  
          <!-- 根据ID检索信息 -->
          <div style="width: 200px;">
            <span class="demonstration">员工ID：</span>
            <el-input clearable   
              style="width: 130px;"
              placeholder="请输入内容"
              v-model="idEmpNo"
              ref="cleared"
              >
            </el-input>
          </div>
          <!-- 根据姓名 -->
            <div>
              <span class="demonstration">姓名：</span>
              <el-input
                style="width: 130px;"
                placeholder="请输入姓名"
                v-model="empName"
                clearable   >
              </el-input>
            </div> 
            <!-- 根据在职状态 -->
            <div>
              <span class="demonstration">状态：</span>
              <el-select v-model="typeState" clearable    placeholder="请选择">
                <el-option
                  v-for="item in stated"
                  :key="item.states"
                  :label="item.label"
                  :value="item.states">
                </el-option>
              </el-select>
            </div> 
             <!-- 根据职位 -->
          <div>
            <span class="demonstration">职位信息：</span>
            <el-select v-model="postState" clearable    placeholder="请选择">
                <el-option
                  v-for="item in post"
                  :key="item.posts"
                  :label="item.label"
                  :value="item.posts">
                </el-option>
              </el-select>
          </div>
          

          <!-- 按钮 -->
          <div class="tacc" >
            <el-button type="primary" @click="handleOpen" v-if="closes">
            <i  class="el-icon-arrow-down">展开</i>
            </el-button>
            <el-button type="primary" @click="handleClose" v-else>
            <i  class="el-icon-arrow-up">收起</i>
            </el-button>
          </div >
        </div>
        <!-- 搜索body -->
        <div class="retrieval-body ">
           <!-- 根据家庭地址 -->
            <div>
              <span class="demonstration">地址：</span>
               <el-input clearable   
                style="width: 130px;"
                placeholder="请输入地址"
                v-model="empAddress"
                >
              </el-input>
            </div>      
            
          <!-- 根据入职日期-->
            <div class="block">
              <span class="demonstration">请选择查询时间段:</span>
              <el-date-picker
                v-model="createDate"
                type="datetimerange"
                value-format="yyyy-MM-dd HH:mm:ss"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
              </el-date-picker>
            </div>
            <!--操作区 -->
            <div class="icons" style="width: 150px;">
              <el-button-group>
                <el-button type="primary"  @click="Reset('cleared')" >重置</el-button>
                  <el-button type="primary"  @click="Serch" >搜索</el-button>
                <el-button type="primary"  @click="dialogTableVisible = true" >入职</el-button>
              </el-button-group>
            </div>
            
        </div>   
      </div>
      <!-- 增-----员工入职 -->
      <el-dialog title="录入员工信息" :visible.sync="dialogTableVisible">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="员工姓名" prop="empName">
          <el-input type="text" v-model="ruleForm.empName" autocomplete="off"></el-input>
        </el-form-item> 
        <div style="display: flex;justify-content: space-between;align-items: center; line-height: 60px; text-align: left;">
          <el-form-item >
            <span slot="label">
              <span style="color: red;">*</span>
              <span>职位</span>
            </span>
            <el-select v-model="posts" :placeholder="post.label" >
                <el-option
                  v-for="item in post"
                  :key="item.posts"
                  :label="item.label"
                  :value="item.posts">
                </el-option>
            </el-select>
          </el-form-item>
        
          <el-form-item >
            <span slot="label">
              <span style="color: red">*</span>
              <span>状态</span>
            </span>
            <el-select v-model="states" :placeholder="stated.label" >
                <el-option
                  v-for="item in stated"
                  :key="item.states"
                  :label="item.label"
                  :value="item.states">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="员工姓别" prop="sex">
            <el-select v-model="value" :placeholder="options.label">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item label="身份证号" prop="identity">
          <el-input v-model.number="ruleForm.identity"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="empPhoneNum">
          <el-input v-model="ruleForm.empPhoneNum"></el-input>
        </el-form-item>
        <el-form-item label="门店地址" prop="empAddress">
          <el-input v-model.number="ruleForm.empAddress"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" prop="address">
          <el-input v-model.number="ruleForm.address"></el-input>
        </el-form-item>
        <el-upload
          class="avatar-uploader"
          action="http://43.142.57.112:8081/fat-sheep-back/a/file/upload?dir=pic"
          :show-file-list="false"
          :on-success="handleAvatarSuccess">
          <img v-if="imgUrl" :src="this.imgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        
        
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      </el-dialog >

      <!--操作区 -->
      <div class="icons" ref="button">
        <el-button-group>
          <el-button type="primary"  @click="Reset" style="margin-right: 1px;">重置</el-button>
            <el-button type="primary"  @click="Serch" style="margin-right: 1px;">搜索</el-button>
          <el-button type="primary"  @click="addbtn" >入职</el-button>
        </el-button-group>
      </div>
      <!-- 员工信息表格 -->
      <el-table
        :data="tableData"
        border
        max-height="520"
        stripe
        id="Table-concainer"
        style="margin-bottom: 5px;"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="工号" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.empNo }}
            </span> 
          </template>
        </el-table-column>
        <el-table-column fixed="left" label="姓名" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.empName }}
            </span> 
          </template>
        </el-table-column>
        <el-table-column label="入职日期" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.createDate }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="岗位" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.empPost }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="图片" width="180">
          <template slot-scope="scope">

            <span style="margin-left: 10px">
            <img :src="scope.row.empPic" alt="" style="height: 50px;width: 50px;">
              <!-- {{ scope.row.empPic }} -->
            </span>
          </template>
        </el-table-column>
        <el-table-column label="性别" width="80">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.sex}}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="80">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.empState }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="工作地址" width="80">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.empAddress }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="家庭住址" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.address }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="身份证号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.identity }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="电话号码" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              {{ scope.row.empPhoneNum }}
            </span>
          </template>
        </el-table-column>
        <el-table-column  label="其他" width="180">
          <template slot-scope="scope">
            <el-button size="mini" slot="reference" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 改----员工信息编辑 -->
      <el-dialog title="编辑信息" :visible.sync="visible">
        <el-form :model="editDates" status-icon  ref="editDates" label-width="100px" class="demo-ruleForm">
        <el-form-item label="员工姓名" prop="empName" >
          <el-input v-model.number="editDates.empName" :placeholder = "editDates.empName"></el-input>
        </el-form-item>
        <el-form-item label="门店地址" prop="empAddress">
          <el-input v-model.number="editDates.empAddress" :placeholder = "editDates.empAddress"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" prop="address">
          <el-input v-model.number="editDates.address" :placeholder = "editDates.address"></el-input>
        </el-form-item>
        <div style="display: flex;">
          <el-form-item label="职位" prop="empPost" style="width: 300px;">
            <el-select v-model="posts" :placeholder="post.label" >
                <el-option
                  v-for="item in post"
                  :key="item.posts"
                  :label="item.label"
                  :value="item.posts">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态" prop="empState" style="width: 300px;"  >
            <el-select v-model="states" :placeholder="stated.label">
                <el-option
                  v-for="item in stated"
                  :key="item.states"
                  :label="item.label"
                  :value="item.states">
                </el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item label="员工身份证号" prop="identity">
          <el-input v-model.number="editDates.identity"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="empPhoneNum">
          <el-input v-model.number="editDates.empPhoneNum"></el-input>
        </el-form-item>
        <el-upload
          class="avatar-uploader"
          action="http://43.142.57.112:8081/fat-sheep-back/a/file/upload?dir=pic"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
          :on-success="changeSuccess">
          <img v-if="changeUrl" :src="this.changeUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        
        <el-form-item>
          <el-button type="primary" @click="editinp">提交</el-button>
        </el-form-item>
      </el-form>
      </el-dialog >
      <!-- 分页区 -->
      <el-pagination
        background
        layout=" sizes, prev, pager, next, total, jumper"
        @prev-click="handleSizeChange"
        @next-click="nextPages"
        @current-change="changeCurrent"
        :total="totals" v-model="totals">
      </el-pagination>
  </div>
</div>
</template>

<script>

export default {
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('名字不能为空哦'));
        } else {
          callback();
        }
      };
    
    var isCardId = (rule, value, callback) => {
      if (!value) {
        return new Error("请输入身份证号)");
      } else {
        if (this.addPersonnelForm.documenttype == "identity") {
          const reg =
            /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(([0-2][1-9])|10|20|30|31)\d{3}(\d|X|x)$/;
          const card = reg.test(value);
          if (!card) { 
            callback(new Error("身份证号格式有误！"));
          } else {
            callback();
          }
        }
      }
    };
    let validatePhone = (rule,value,callback)=>{
      if (!value){
        callback(new Error('手机号不能为空！'));
      }
      //使用正则表达式进行验证手机号码
      if (!/^1[3456789]\d{9}$/.test(value)){
        callback(new Error('手机号不正确！'));
      }
    }

    return {
      rules: {
          empName: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          identity: [
            { required: true, message: "请输入证件号", trigger: "blur" },
            { validator: isCardId, trigger: 'blur' }
          ],
          empPhoneNum: [
            { validator: validatePhone, trigger: 'blur' }
          ]

      },
      falag:null,
      imgUrl: '',
      changeUrl:'',
      pageNum : 1,//当前页号
      pagesize :10 ,//每页大小
      input2:'',
      totals:null,
      editDates:{},
      post: [],
        // {
        //   posts: '1',
        //   label: '董事'
        // }, {
        //   posts: '2',
        //   label: '总经理'
        // }, {
        //   posts: '3',
        //   label: '区域经理'
        // },{
        //   posts: '5',
        //   label: '副店长'
        // },
        // {
        //   posts: '4',
        //   label: '店长'
        // },
        // {
        //   posts: '6',
        //   label: '店主管'
        // },
        // {
        //   posts: '7',
        //   label: '服务员'
        // },{
        //   posts: '8',
        //   label: '厨师'
        // }
 
      options: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }, {
          value: '0',
          label: '未知'
        }],
      stated: [],
        // {
        //   states: '1',
        //   label: '在职'
        // }, {
        //   states: '0',
        //   label: '离职'
        // }, {
        //   states: '2',
        //   label: '休假'
        // }
        sex:'',
        value: '',
        states: '',
        posts: '',

      ruleForm:{
          operateId: '',
          empName: '',
          empPhoneNum: '',
          empAddress:'',
          address:'',
          empPost: '',
          empState:'',
          sex:'',
          identity:'',
        },
      tableData:[
      ],
      dialogTableVisible: false,
      visible: false,

      form: {
        date: "",
          name: "",
          state: "",
          address: "",
          tel: "",
          type: "",
          post: "",
      },
      username:"",
      usertel:"",
      useraddress:"",
      userdate:"",
      userpost:"",
      userstate:"",
      usertype:"",
      formLabelWidth: "120px",
      // 日期选择数据区
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
      },
      closes:true,
      createDate:'',
      empState:'',
      empPost:'',
      empAddress:'',
      idEmpNo:'',
      sex:{
        1:'男',2:'未知',0:'女'
      },
      value: '',
      typeState:'',
      postState: '',
      empName:'', 
      empPic:'',//上传图片
      
    };
  },
  methods:{
    
    // 接口调用函数区
      // 调用员工基本信息查询接口

    async Getele(){
      const serchObj = {
        "pageNum":this.pageNum,
        "pageSize": this.pagesize,
        "empAddress": this.empAddress+"",
        "empNo": this.idEmpNo+"",
        "empName":this.empName+"",
      };
      if(this.postState !== ''){
        serchObj.empPost = this.postState;
      };
      if(this.typeState !== ''){
        serchObj.empState = this.typeState;
      };
      if(this.createDate !== ''){
        serchObj.createDateEnd = this.createDate[1];
        serchObj.createDateStart = this.createDate[0];
      };
      if(this.empAddress !== ''){
        serchObj.empAddress = this.empAddress;
      };
      
      this.Getpost();
      const {data:res} = await this.$http.post("http://43.142.57.112:8081/fat-sheep-back/a/empInfo/query",serchObj)
      res.data.some((item)=>{
        for(var k in this.sex){
          if(item.sex == k){
            item.sex = this.sex[k];
          }
        };
        // 岗位信息
        for(var key in this.post){
            if(item.empPost == key){
              item.empPost = this.post[key].label;
            }
          }

          // 在职状态
          for(var k in this.stated){
            if(item.empState == k){
              item.empState = this.stated[k].label;
            }
          }
      });
      this.tableData  =res.data;
      this.totals = res.total;
      this.pageNum = res.pageNum;
      this.pagesize = res.pageSize;
      this.empAddress = res.empAddress;
    },
      // 调用员工岗位状态信息接口
    async Getpost(){
         const {data:ress} = await this.$http.get("http://43.142.57.112:8081/fat-sheep-back/a/empEnumInfo/query?enumsType=1000,1001") 
        // 循环获取过泪的1000对象；把1000的key复制给post数组的posts
         this.post = [];
         this.stated = [];
         for(var k in ress.data[1000]){
          // post:[{'pasts':'','lable':''},{'pasts':'','lable':''},]
            const obj ={};
            obj.posts = k;
            obj.label = ress.data[1000][k];
            this.post.push(obj)
         }    
         for(var k in ress.data[1001]){
          // stated:[{'states':'','lable':''},{'states':'','lable':''},]
            const obj ={};
            obj.states = k;
            obj.label = ress.data[1001][k];
            this.stated.push(obj)
         } 
    },
    // 分页操作区
    handleSizeChange(){
      if(this.currentPage <= 1){
        return
      }
      this.pageNum = this.currentPage - 1;
      this.Getele();
    },
    nextPages(){
      this.pageNum +=  1;
      this.Getele();
    },
    changeCurrent(val){
      this.pageNum = val;
      this.Getele();
    },
    // 点击入职
    addbtn(){
      this.dialogTableVisible = true;
      this.posts ='';
      this.states ='';
      this.post.label = '请选择';
      this.stated.label = '请选择';
      this.value ='';
      this.ruleForm.empName='';
      this.ruleForm.empAddress='';
      this.ruleForm.empPhoneNum='';
      this.ruleForm.address='';
      this.ruleForm.identity='';
      this.imgUrl ='';
    },
    // 增加员工
     async submitForm(formName) {
        
        if(this.ruleForm.empName === '' || this.posts==='' ||this.states===''){
            this.$message({
              showClose: true,
              message: '带*的是必填的呦！！',
              type: 'warning'
            });
          return;
        };
          
         const operateId = JSON.parse(localStorage.getItem('user'));
            const {data:res} = await this.$http.post("http://43.142.57.112:8081/fat-sheep-back/a/empInfo/add",{
            "operateId":operateId.empId,
              "address": ""+this.ruleForm.address+"",
              "empAddress": ""+this.ruleForm.empAddress+"",
              "empName": ""+this.ruleForm.empName+"",
              "empState": this.states,
              "empPost": this.posts,
              "empPic":this.empPic+"",
              "sex": ""+this.value+"",
              "identity": ""+this.ruleForm.identity+"",
            }); 
          if(res.code == 200){
            this.$message({
              showClose: true,
              message: res.data,
              type: 'success'
            });
            this.Getele();
          }else{
            this.$message({
              showClose: true,
              message: res.data,
              type: 'error'
            });
          }
          this.dialogTableVisible=false;
          this.resetForm(formName);
      },
      resetForm(formName) {
           this.posts ='';
           this.states ='';
           this.value ='';
           this.ruleForm.empName='';
           this.imgUrl ='';
        this.$refs[formName].resetFields();
      },
      // 编辑员工信息
      handleEdit(index){
        // 清空
            this.posts ='';
            this.states ='';
            this.editDates.address='';
            this.editDates.empAddress='';
            this.editDates.empName='';
            this.changeUrl ='';
        // 赋值
        this.visible = true;
        this.editDates = this.tableData[index];
        this.changeUrl = this.editDates.empPic; 
        this.post.label = this.editDates.empPost;
        this.stated.label = this.editDates.empState;
      },
      // 提交编辑
      async editinp(){
        if(this.posts === ''){
          this.post.some((item)=>{
            if(this.editDates.empPost === item.label){
              this.posts = item.posts ;
            }
          })
        };
        if(this.states === ''){
          this.stated.some((item)=>{
            if(this.editDates.empState === item.label){
              this.states = item.states ;
            }
          })
        }
        const operateId = JSON.parse(localStorage.getItem('user'));
          const {data:res} = await this.$http.post("http://43.142.57.112:8081/fat-sheep-back/a/empInfo/update",{
            "operateId":operateId.empId,
            "empId": this.editDates.empId,
            "empAddress": ""+this.editDates.empAddress+"",
            "empPhoneNum": ""+this.editDates.empPhoneNum+"",
            "identity": ""+this.editDates.identity+"",
            "empState": this.states,
            "empName": this.editDates.empName,
            "empPost": this.posts,
            "empPic":this.empPic+""
          });
         if(res.code == 200){      
            this.$message({
              showClose: true,
              message: res.data,
              type: 'success'
            });
            this.Getele();
            
          }else{
            this.$message({
              showClose: true,
              message: res.data,
              type: 'error'
            });
          }
        this.visible=false;
      },

      // 删除员工信息
      async handleDelete(index) {
        const ids =this.tableData[index];
        const {data:res} = await this.$http.delete("http://43.142.57.112:8081/fat-sheep-back/a/empInfo/delete/"+ids.empId+"");
        this.$confirm('此操作将永久删除该员工信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.Getele();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    // 展开
    handleOpen() {
      this.closes = false;
      this.$refs.blocks.style = 'height:140px;';
      this.$refs.button.style = 'display:none';
    },
    // 关闭
    handleClose(){
      this.closes = true ;
      this.$refs.blocks.style = 'height:60px;';
      this.$refs.button.style = 'display:block';
    },
    // 搜索
    async Serch(){
      this.pageNum = 0;
      this.Getele();
    },
    // 重置
    Reset(){
      
      this.typeState = '';
      this.idEmpNo = '';
      this.empName = '';
      this.postState = '';
      this.empAddress = '';
      this.createDate = '';
      this.Getele();
      // this.$refs[cleared].resetFields();
      // this.$router.go(0); 
    },
    // 上传图片
    handleAvatarSuccess(res, file) {
      this.imgUrl = URL.createObjectURL(file.raw);
      if(res.success){
        this.empPic = res.data;
      }
    },
    changeSuccess(res, file) {
      this.changeUrl = URL.createObjectURL(file.raw);
      if(res.success){
        this.empPic = res.data;
      }
      
    },
    beforeAvatarUpload(file) {
      /**
       * 1.声明一个数组，用来保存格式规范
       * 2.遍历这个数组，判断传过来的格式在数组中能否找到
       * 3.找不到到就弹出error
       * 4.判断图片大小是否符合isLt2M，不符合就弹出error
       * 
       */
        this.flage = false;
        const isJPG =['image/jpeg' , 'image/png' , 'image/jpg' , 'image/gif'];
        const isLt2M = file.size / 1024 / 1024 < 2;
        for(let i in isJPG){
          if(isJPG[i] === file.type){
            this.flage = true;
          }
          if(this.flage == false){
            this.$message.error('能不能上传个图片，傻吗？');
          }
        };
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }

  },
    // 渲染员工信息表格数据
  created(){
    // 调用员工基本信息查询接口
    this.Getele();

    // 调用员工信息集值接口
    // this.Getpost();
    // 获取id
   
  },
  

};
</script>

<style scoped>
.h1,
.h2,
.h3,
h1,
h2,
h3 {
  margin-top: 0px;
  padding-top:0;
  margin-bottom: 0px;
}

.EleployeeMagement {
  width: 100%;
  box-sizing: border-boxs;
}
#EleployeeMagement-con {
  width: 100%;
  min-width: none;
}
.flexs {
  font-size: 18px;
  flex: 1;
  text-align: left;
}
.muen {
  margin: 0;
  padding: 0;
  text-align: center;
}
.el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0;
  min-width: 0px;
}
.icons {
  float: right;
  width: 160px;
  text-align: right;
}
#Table-concainer {
  width: 100%;
  max-height: 550px;
}
.el-menu-vertical-demo span{
    color: #337ab7;
  }
  .Elelfor-retrieval{
    width: 100%;
    height: 60px;
    min-height: 60px;
    overflow: hidden;
    color: rgb(39, 38, 38);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    line-height: 60px;
    border: 0;
  }
  button{
    width: 50px;
    height: 30px;
    font-size: 14px;
    padding:0;
  }
  .tacc>button{
    border-radius: 5px;
    background-color: white;
    border: 0;
    color: gray;
  }
  .retrieval-header{
    display: flex;
    justify-content: space-between;
  }
  .retrieval-body{
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    align-content: space-between;
  }
  .retrieval-body>div{
    width:270px;
    height: 60px;
  }
  .retrieval-body>div[class="block"]{
    width:550px;
    height: 60px;
    text-align: left;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-form-item__label{
    text-align: left;
  }
</style>
