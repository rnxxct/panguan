<template xmlns="http://www.w3.org/1999/html">
    <el-container>
        <!--style="border: 0px solid #eee"-->
        <el-container style="height: 1000px;background: #000;">
            <el-main>
                <div id="pdfDom">
                    <div class="page" id="page0" style="width: 592px; height: 832px;background-color: white;">
                        <svg id="svg" width="592" height="832" style=" font-size: 10px"></svg>
                    </div>
                    <div class="page" id="page1"
                         style="width: 592px; height: 832px;background-color: white; display: none">
                        <svg id="svg1" width="592" height="832" style=" font-size: 10px"></svg>
                    </div>
                    <div class="page" id="page2"
                         style="width: 592px; height: 832px;background-color: white; display: none">
                        <svg id="svg2" width="592" height="832" style=" font-size: 10px"></svg>
                    </div>
                    <div class="page" id="page3"
                         style="width: 592px; height: 832px;background-color: white; display: none">
                        <svg id="svg3" width="592" height="832" style=" font-size: 10px"></svg>
                    </div>
                </div>
                <!--
                        <div id="pdfDom" style="width:521px; margin: 0 auto">
                          <div class="page"
                               style="text-align: center; background-color: white; width: 521px; height: 736.842px;margin:0 auto;">
                            <textarea class="headerTitle"
                                      style="text-align: center; width: 480px; font-size: 23px; border-style: dashed; word-break: break-all; z-index: 2;">青岛新高三入学检测-语文 new2</textarea>
                            <svg width="480" height="330.5" viewBox="0 0 960 661">
                              <defs></defs>
                              <text x="0" y="143" style="font-size: 33px; font-family: 文泉驿微米黑;">考号：</text>
                              <line x1="78" x2="259" y1="149" y2="149" stroke="#000000" style=""></line>
                              <text x="598" y="143" style="font-size: 33px; font-family: 文泉驿微米黑;">学校：</text>
                              <line x1="677" x2="858" y1="149" y2="149" stroke="#000000" style=""></line>
                              <text x="299" y="143" style="font-size: 33px; font-family: 文泉驿微米黑;">考场：</text>
                              <line x1="377" x2="559" y1="149" y2="149" stroke="#000000" style=""></line>
                              <rect x="0" y="173" width="507" height="78" stroke="#000000"
                                    style="fill-opacity: 0;"></rect>
                              <text x="163" y="228" style="font-size: 33px; font-family: 文泉驿微米黑;">注 意 事 项</text>
                              <rect x="0" y="251" width="507" height="299" stroke="#000000"
                                    style="fill-opacity: 0;"></rect>
                              <text x="15" y="292" style="font-size: 25px; font-family: 文泉驿微米黑;"> 1.　答题前请将姓名、班级、考场、座
                              </text>
                              <text x="15" y="325" style="font-size: 25px; font-family: 文泉驿微米黑;">　　号和准考证号填写清楚。</text>
                              <text x="15" y="357" style="font-size: 25px; font-family: 文泉驿微米黑;">
                                2.　客观题答题,必须使用2B铅笔填涂,
                              </text>
                              <text x="15" y="390" style="font-size: 25px; font-family: 文泉驿微米黑;">　　修改时用橡皮擦干净。</text>
                              <text x="15" y="422" style="font-size: 25px; font-family: 文泉驿微米黑;"> 3.　主观题必须使用黑色签字笔书写。
                              </text>
                              <text x="15" y="455" style="font-size: 25px; font-family: 文泉驿微米黑;">
                                4.　必须在题号对应的答题区域内作答,
                              </text>
                              <text x="15" y="488" style="font-size: 25px; font-family: 文泉驿微米黑;">　　超出答题区域书写无效。</text>
                              <text x="15" y="520" style="font-size: 25px; font-family: 文泉驿微米黑;"> 5.　保持答卷清洁完整。</text>
                              <rect x="0" y="551" width="507" height="100" stroke="#000000"
                                    style="fill-opacity: 0;"></rect>
                              <text x="11" y="611" style="font-size: 33px; font-family: 文泉驿微米黑;">正确填涂</text>
                              <rect x="177" y="590" width="31" height="19" stroke="#000000" fill="#000000"
                                    style="fill-opacity: 1;"></rect>
                              <text x="232" y="611" style="font-size: 33px; font-family: 文泉驿微米黑;">缺考标记</text>
                              <rect x="397" y="590" width="31" height="19" stroke="#000000"
                                    style="fill-opacity: 0;"></rect>
                              <rect x="507" y="173" width="452" height="478" stroke="#000000"
                                    style="fill-opacity: 0;"></rect>
                              <rect x="507" y="173" width="452" height="78" stroke="#000000"
                                    style="fill-opacity: 0;"></rect>
                              <text x="643" y="228" style="font-size: 33px; font-family: 文泉驿微米黑;">准 考 证 号</text>
                              <line x1="564" x2="564" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="621" x2="621" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="677" x2="677" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="734" x2="734" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="790" x2="790" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="847" x2="847" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="904" x2="904" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="960" x2="960" y1="251" y2="651" stroke="#000000" style=""></line>
                              <line x1="507" x2="960" y1="320" y2="320" stroke="#000000" style=""></line>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="520" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="520" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="520" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="520" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="520" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="520" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="520" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="520" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="520" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="520" y="620" width="31" height="19"></image>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="577" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="577" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="577" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="577" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="577" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="577" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="577" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="577" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="577" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="577" y="620" width="31" height="19"></image>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="633" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="633" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="633" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="633" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="633" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="633" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="633" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="633" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="633" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="633" y="620" width="31" height="19"></image>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="690" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="690" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="690" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="690" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="690" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="690" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="690" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="690" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="690" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="690" y="620" width="31" height="19"></image>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="746" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="746" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="746" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="746" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="746" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="746" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="746" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="746" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="746" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="746" y="620" width="31" height="19"></image>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="803" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="803" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="803" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="803" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="803" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="803" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="803" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="803" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="803" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="803" y="620" width="31" height="19"></image>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="859" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="859" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="859" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="859" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="859" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="859" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="859" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="859" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="859" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="859" y="620" width="31" height="19"></image>
                              <image xlink:href="/assets/b55ead0ec8ed2e1b7f31586a61136814.svg"
                                     preserveAspectRatio="none" x="916" y="336" width="31" height="19"></image>
                              <image xlink:href="/assets/66aeff1a048fbe394de77c7f0821759d.svg"
                                     preserveAspectRatio="none" x="916" y="368" width="31" height="19"></image>
                              <image xlink:href="/assets/cd7cfd8b08b3ec0d660b557b3c229284.svg"
                                     preserveAspectRatio="none" x="916" y="399" width="31" height="19"></image>
                              <image xlink:href="/assets/a4ace58c877e6dcb59db53f4ada7d8cb.svg"
                                     preserveAspectRatio="none" x="916" y="431" width="31" height="19"></image>
                              <image xlink:href="/assets/116a6c9b8edd52eaf956285417c521ca.svg"
                                     preserveAspectRatio="none" x="916" y="462" width="31" height="19"></image>
                              <image xlink:href="/assets/4f9b90ae7c3854ac1eed28af4821fc37.svg"
                                     preserveAspectRatio="none" x="916" y="494" width="31" height="19"></image>
                              <image xlink:href="/assets/fd504980ac795dd783c4975f3f70eed0.svg"
                                     preserveAspectRatio="none" x="916" y="525" width="31" height="19"></image>
                              <image xlink:href="/assets/880e1b5aa590ce7a4e9ffc480f891451.svg"
                                     preserveAspectRatio="none" x="916" y="557" width="31" height="19"></image>
                              <image xlink:href="/assets/20655727892566340688dac691b6b3ad.svg"
                                     preserveAspectRatio="none" x="916" y="588" width="31" height="19"></image>
                              <image xlink:href="/assets/2ad01a1916b7a3304e2c251746427821.svg"
                                     preserveAspectRatio="none" x="916" y="620" width="31" height="19"></image>
                            </svg>
                          </div>
                          <div style="margin: 0 auto">
                            <svg width="480" height="98" viewBox="0 0 960 196">
                              <defs></defs>
                              <text x="429" y="68" style="font-size: 29px;">第 1-1 页</text>
                            </svg>
                          </div>
                        </div>
                -->
            </el-main>
        </el-container>
        <el-aside width="45%" style="height: 90%;position: relative">
            <el-button icon="el-icon-circle-plus-outline" type="primary" @click="selection = true" @close="handleClose">
                选择题
            </el-button>
            <el-button icon="el-icon-circle-plus-outline" type="success" @close="handleClose">填空题</el-button>
            <el-button icon="el-icon-circle-plus-outline" type="info" @close="handleClose">主观题</el-button>
            <div class="step">
                <div class="title">设置答题卡基础信息</div>
                <br/>
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="考试名称">
                        <el-input v-model="param.examName" placeholder="请输入考试名称"
                                  @change="handleChangeExamName"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-radio-group v-model="param.examType" @change="handleChangeNumberType">
                            <el-radio label="学号"></el-radio>
                            <el-radio label="考号"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="有无密封线">
                        <el-radio-group v-model="param.line" @change="handleChangeSealingWire">
                            <el-radio label="有"></el-radio>
                            <el-radio label="无"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
            <div style="position: relative">
                <div class="title">添加题目</div>
                <el-collapse v-model="activeNames" @change="handleChange"
                             style="font-size: 15px;text-align: left!important;">
                    <el-collapse-item title="选择题" name="1">
                        <div v-for="(item,index) in objective" v-if="objective.length>0" style="margin-top: 3px">
                            <span>{{item.num}}</span>
                            <el-radio-group :key="item.num" style="text-align: left!important;">
                                <el-radio :label="option" v-for="(option,index) in item.options"
                                          :key="option"></el-radio>
                            </el-radio-group>
                            <!--<el-button size="mini" @click="handleDeleteSingleObject(index)">删除</el-button>-->
                            <el-button size="mini">编辑</el-button>
                        </div>
                        <br/>
                        <el-button type="primary" size="mini" icon="plus" @click="handleObjectiveClick">+选择题</el-button>
                        <el-button type="danger" size="mini" @click="handleObjectDeleteAll" v-if="objective.length>0">
                            -选择题
                        </el-button>
                    </el-collapse-item>
                    <el-collapse-item title="填空题" name="2">
                        <el-table :data="blanks" :border=true stripe v-if="blanks.length>0">
                            <el-table-column align="left" prop="name" label="题号"></el-table-column>
                            <el-table-column align="left" prop="num" label="行数"></el-table-column>
                            <el-table-column align="left" prop="size" label="每行几个"></el-table-column>
                            <el-table-column align="left" prop="position" label="位置"></el-table-column>
                            <el-table-column align="left" min-width="100" prop="action" label="动作">
                                <template slot-scope="scope">
                                    <el-button
                                        size="mini"
                                        type="primary" plain
                                        @click="handleBlankDelete(scope.$index, scope.row)">删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-button size="mini" type="primary" @click="addBlanks = true">+填空题</el-button>
                    </el-collapse-item>
                    <el-collapse-item title="主观题" name="3">
                        <el-table :data="subjective" :border=true stripe v-if="subjective.length>0">
                            <el-table-column align="left" prop="name" label="题号"></el-table-column>
                            <el-table-column align="left" prop="size" label="行数"></el-table-column>
                            <el-table-column align="left" prop="fill" label="填充"></el-table-column>
                            <el-table-column align="left" prop="position" label="分数栏位置"></el-table-column>
                            <el-table-column align="left" prop="point" label="是否小数"></el-table-column>
                            <el-table-column align="left" min-width="100" prop="action" label="动作">
                                <template slot-scope="scope">
                                    <el-button
                                        size="mini"
                                        type="primary" plain
                                        @click="handleSubjectEdit(scope.$index, scope.row)">编辑
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-button size="mini" type="primary" @click="addSubjective = true">+主观题</el-button>
                    </el-collapse-item>
                    <!--
                              <el-collapse-item :title='item.title' v-for="(item,index) in questions" name="index" v-if="questions.length>0"
                                                :key="index">
                                <div v-if="item.type=='objective'">
                                  <div v-for="(item,index) in objective" v-if="objective.length>0" style="margin-top: 3px">
                                    <span>{{item.num}}</span>
                                    <el-radio-group :key="item.num" style="text-align: left!important;">
                                      <el-radio :label="option" v-for="(option,index) in item.options" :key="option"></el-radio>
                                    </el-radio-group>
                                    <el-button size="mini" @click="handleDeleteSingleObject(index)">删除</el-button>
                                  </div>
                                  <br/>
                                  <el-button type="primary" size="mini" icon="plus" @click="handleObjectiveClick">+选择题</el-button>
                                  <el-button type="danger" size="mini" @click="handleObjectDeleteAll" v-if="objective.length>0">-选择题
                                  </el-button>
                                </div>
                                <div v-if="item.type == 'blanks'">
                                  <el-table :data="blanks" :border=true stripe v-if="blanks.length>0">
                                    <el-table-column align="left" prop="name" label="题号"></el-table-column>
                                    <el-table-column align="left" prop="num" label="行数"></el-table-column>
                                    <el-table-column align="left" prop="size" label="每行几个"></el-table-column>
                                    <el-table-colmn align="left" prop="position" label="位置"></el-table-colmn>
                                    <el-table-column align="left" min-width="100" prop="action" label="动作">
                                      <template slot-scope="scope">
                                        <el-button
                                          size="mini"
                                          type="primary" plain
                                          @click="handleBlankDelete(scope.$index, scope.row)">删除
                                        </el-button>
                                      </template>
                                    </el-table-column>
                                  </el-table>
                                </div>
                                <div v-if="item.type=='subjective'">
                                  <el-table :data="item.data" :border=true stripe v-if="item.data.length>0">
                                    <el-table-column align="left" prop="name" label="题号"></el-table-column>
                                    <el-table-column align="left" prop="size" label="行数"></el-table-column>
                                    <el-table-column align="left" prop="fill" label="填充"></el-table-column>
                                    <el-table-column align="left" prop="position" label="分数栏位置"></el-table-column>
                                    <el-table-column align="left" prop="point" label="是否小数"></el-table-column>
                                    <el-table-column align="left" min-width="100" prop="action" label="动作">
                                      <template slot-scope="scope">
                                        <el-button
                                          size="mini"
                                          type="primary" plain
                                          @click="handleSubjectEdit(scope.$index, scope.row)">编辑
                                        </el-button>
                                      </template>
                                    </el-table-column>
                                  </el-table>
                                  <el-button size="mini" type="primary" @click="addSubjective = true">+主观题</el-button>
                                </div>
                              </el-collapse-item>
                    -->
                </el-collapse>
            </div>
            <div style="position: absolute;bottom: 0px;left: 30%">
                <el-button type="primary" @click="upload()">保存</el-button>
                <el-button type="success" @click="getPdf(currentPage)">下载</el-button>
                <el-button type="info">预览</el-button>
            </div>
        </el-aside>
        <el-dialog title="添加选择大题" :visible.sync="selection" width="30%">
            <el-form :inline=true align="left">
                <el-form-item label="题目名称">
                    <el-input autocomplete="off" v-model="addSelection"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog title="+选择题" :visible.sync="editObjective" @close='closeDialog'>
            <el-form :inline=true align="left">
                <el-form-item label="从">
                    <el-input autocomplete="off" v-model="objectStart"></el-input>
                </el-form-item>
                <el-form-item label="题到">
                    <el-input autocomplete="off" v-model="objectEnd"></el-input>
                </el-form-item>
                <el-checkbox-group style="text-align: left!important;" v-model="defaultSelection">
                    <el-checkbox :label="option" v-for="(option,index) in objectOptions" :key="option"></el-checkbox>
                </el-checkbox-group>
                <br/>
                <!--<el-button type="primary">+添加选择题</el-button>-->
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="primary" @click="toAddObjective">确 定</el-button>
                <el-button @click="editObjective=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="批量删除选择题" :visible.sync="deleteObjectAll" width="50%">
            <el-form :inline=true align="left">
                <el-form-item label="从">
                    <el-input autocomplete="off" v-model="objectDeleteStart"></el-input>
                </el-form-item>
                <el-form-item label="题到">
                    <el-input autocomplete="off" v-model="objectDeleteEnd"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="primary" @click="toDeleteObjectAll">确 定</el-button>
                <el-button @click="deleteObjectAll=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="填空题" :visible.sync="addBlanks" width="30%">
            <el-form :inline=true label-width="100px">
                <el-form-item label="题目名称">
                    <el-input v-model="addBlanksParam.name"></el-input>
                </el-form-item>
                <el-form-item label="行数">
                    <el-input v-model="addBlanksParam.num"></el-input>
                </el-form-item>
                <el-form-item label="每行几列">
                    <el-input v-model="addBlanksParam.size"></el-input>
                </el-form-item>
                <el-form-item label="起始题号">
                    <el-input v-model="addBlanksParam.start"></el-input>
                </el-form-item>
                <!--<el-form-item label="分数栏位置">-->
                <!--<el-radio-group v-model="addBlanksParam.position">-->
                <!--<el-radio label="right">右</el-radio>-->
                <!--<el-radio label="left">左</el-radio>-->
                <!--<el-radio label="inner">内</el-radio>-->
                <!--</el-radio-group>-->
                <!--</el-form-item>-->
                <el-form-item label="是否有步骤分">
                    <el-radio-group v-model="addBlanksParam.stepScore">
                        <el-radio label="yes">是</el-radio>
                        <el-radio label="no">否</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="primary" @click="toAddBlanks">确 定</el-button>
                <el-button @click="addBlanks=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改填空题" :visible.sync="editBlanks"></el-dialog>
        <el-dialog title="简答题" :visible.sync="addSubjective" width="30%" style="text-align: left">
            <el-form :inline="true" labelWidth="120px">
                <el-form-item label="题目名称">
                    <el-input v-model="addSubjectParam.name" placeholder="请输入题目名称"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="行数">
                    <el-input v-model="addSubjectParam.size"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="步骤分个数">
                    <el-input v-model="addSubjectParam.stepScoreNum"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="是否填充">
                    <el-radio-group v-model="addSubjectParam.fill">
                        <el-radio :label=true>是</el-radio>
                        <el-radio :label=false>否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <br/>
                <el-form-item label="是否有小数">
                    <el-radio-group v-model="addSubjectParam.point">
                        <el-radio :label=true>是</el-radio>
                        <el-radio :label=false>否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <br/>
                <el-form-item label="分数栏位置">
                    <el-radio-group v-model="addSubjectParam.position">
                        <el-radio label="right">右</el-radio>
                        <el-radio label="left">左</el-radio>
                        <el-radio label="inner">内</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="primary" @click="toAddSubject">确 定</el-button>
                <el-button @click="addSubjective=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="简答题" :visible.sync="editSubjective">
            <el-form :inline="true">
                <el-form-item label="题目名称">
                    <el-input v-model="copySubject.name" placeholder="请输入题目名称"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="行数">
                    <el-input v-model="copySubject.size"></el-input>
                </el-form-item>
                <br/>
                <el-form-item label="是否填充">
                    <el-radio-group v-model="copySubject.fill">
                        <el-radio :label=true>是</el-radio>
                        <el-radio :label=false>否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <br/>
                <el-form-item label="是否有小数">
                    <el-radio-group v-model="copySubject.point">
                        <el-radio :label=true>是</el-radio>
                        <el-radio :label=false>否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <br/>
                <el-form-item label="分数栏位置">
                    <el-radio-group v-model="copySubject.position">
                        <el-radio label="right">右</el-radio>
                        <el-radio label="left">左</el-radio>
                        <el-radio label="inner">内</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" align="center">
                <el-button type="danger" @click="isDelete = true">删 除</el-button>
                <el-button type="primary" @click="toEditSubject">确 定</el-button>
                <el-button @click="editSubjective=false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="isDelete" width="20%">
            <span>确定删除</span>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isDelete=false">取 消</el-button>
                <el-button type="primary" @click="toDelete">确 定</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>
<script>

    const OSS = require('ali-oss')
    import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
    import ElAside from "../../../node_modules/element-ui/packages/aside/src/main";
    import ElContainer from "../../../node_modules/element-ui/packages/container/src/main";
    import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    import ElRadioGroup from "../../../node_modules/element-ui/packages/radio/src/radio-group";
    import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component";
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
    import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
    import ElCheckboxGroup from "../../../node_modules/element-ui/packages/checkbox/src/checkbox-group";
    import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    import ElCollapse from "../../../node_modules/element-ui/packages/collapse/src/collapse";
    import ElCollapseItem from "../../../node_modules/element-ui/packages/collapse/src/collapse-item";
    import {templateAdd} from '@/api/template/template.js';
    import html2Canvas from 'html2canvas';
    import JsPDF from 'jspdf'

    export default {
        components: {
            ElCollapseItem,
            ElCollapse,
            ElInput,
            ElCheckbox,
            ElCheckboxGroup,
            ElRadio,
            ElFormItem,
            ElDialog,
            ElRadioGroup,
            ElButton,
            ElForm,
            ElContainer,
            ElAside
        },
        created() {

        },
        mounted() {
            this.initSvg();
        },
        watch: {
            'objective': function (val) {
                this.handleSheetChange();
            },
            'blanks': function () {
                this.handleSheetChange();
            },
            'subjective': function () {
                this.handleSheetChange();
            }
        },
        data() {
            return {
                widthOfPage: '520px',
                heightOfPage: '735.42px',
                baseWidth: 592 / 28, /*每页划分的基础宽度*/
                baseHeight: 832 / 68, /*每页划分的基础高度*/
                selection: false,
                blanks: false,
                objective: false,
                addSelection: '',
                htmlTitle: 'test',
                currentSubject: {},
                currentSubjectIndex: 0,
                copySubject: {},
                objectStart: 1,
                objectDeleteStart: '',
                objectDeleteEnd: '',
                objectEnd: '',
                deleteObjectAll: false,
                editObjective: false,
                editBlanks: false,
                addBlanks: false,
                addSubjective: false,
                editSubjective: false,
                isDelete: false, /*删除简答题的标志*/
                objectOptions: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
                defaultSelection: ['A', 'B', 'C', 'D'],
                questions: [
                    {title: '选择题1', data: this.objective, type: 'objective'}
                ],
                objective: [
                    /* {num: 1, options: ['A', 'B', 'C', 'D']}*/
                ], /*客观题*/
                blanks: [
                    /*{name: '选择题', size: '3', num: '4', position: 'right'}*/
                ],
                subjective: [
                    /*{name: '13(总分12)', num: '1', fill: true, position: 'left', point: true, size: 3},
                    {name: '14(总分12)', num: '1', fill: true, position: 'left', point: true, size: 3},*/
                ],
                param: {
                    examType: '',
                    examName: '',
                    line: true
                },
                addBlanksParam: {
                    name: '',
                    num: '',
                    size: '',
                    start: '',
                    // position: 'right'
                    stepScore: ''
                },
                addSubjectParam: {
                    name: '',
                    num: '',
                    fill: '',
                    position: '',
                    point: '',
                    size: '',
                    stepScoreNum: ''
                },
                activeNames: ['1', '2', '3'],
                text: undefined,
                text_page3: undefined,
                text1_1: undefined,
                text1_2: undefined,
                text1_3: undefined,
                text2_1: undefined,
                text2_2: undefined,
                text2_3: undefined,
                text3_1: undefined,
                text3_2: undefined,
                text3_3: undefined,
                text4_1: undefined,
                text4_2: undefined,
                text4_3: undefined,
                line1: undefined,
                line2: undefined,
                line3: undefined,
                line4: undefined,
                text2: undefined,
                fragment: undefined,
                rectObjective: undefined,
                textSubjective: [],
                rectSubjective: [],
                rectSubjectiveScore: [],
                rectSubjectiveStepScore: [],
                lineSubjectiveScore: [],
                lineSubjectiveStepScore: [],
                lineSubjectiveStepLine: [],
                bottomPX: 120,
                xmldom: undefined,
                xmlQuestions: undefined,
                sheet: undefined,
                qid: 0,
                currentPage: 1,
                multipleWidth: 1653 / 592,
                multipleHeight: 2338 / 837,
                addForm: {
                    name: 'cscscsxs',
                    subjectID: '1',
                    schoolID: '34',
                    gradeID: '12',
                    xmlContent: '',
                    filesName: '',
                    urls: []
                },
            }
        },
        methods: {
            initSvg() {
                this.xmldom = document.implementation.createDocument('', 'paper_template', null);
                this.xmldom.documentElement.setAttribute('width', '1653');
                this.xmldom.documentElement.setAttribute('height', '2338');
                this.xmlQuestions = this.xmldom.createElement('questions');
                this.sheet = this.xmldom.createElement('sheet');
                this.sheet.setAttribute('sheet_num', '1')
                let page = this.xmldom.createElement('page');
                let page_ID = this.xmldom.createElement('page_ID');
                let student_ID = this.xmldom.createElement('student_ID');
                let student_ID1 = this.xmldom.createElement('student_ID');
                let markers = this.xmldom.createElement('markers');
                let marker = this.xmldom.createElement('marker');
                let marker1 = this.xmldom.createElement('marker');
                let marker2 = this.xmldom.createElement('marker');

                student_ID.setAttribute('border_type', "solid_box");
                student_ID.setAttribute("page_num", "1");
                student_ID.setAttribute("type", "char");
                student_ID.setAttribute("char_num", "4");
                student_ID.setAttribute("tl_x", Math.round(this.multipleWidth * (this.baseWidth * 6.5)).toString());
                student_ID.setAttribute("tl_y", Math.round(this.multipleHeight * (4.2 * this.baseHeight)).toString());
                student_ID.setAttribute("br_x", Math.round(this.multipleWidth * (this.baseWidth * 13.5)).toString());
                student_ID.setAttribute("br_y", Math.round(this.multipleHeight * (6.9 * this.baseHeight)).toString());

                student_ID1.setAttribute('border_type', "solid_box");
                student_ID1.setAttribute("page_num", "1");
                student_ID1.setAttribute("type", "digit");
                student_ID1.setAttribute("digit_num", "5");
                student_ID1.setAttribute("tl_x", Math.round(this.multipleWidth * (this.baseWidth * 14)).toString());
                student_ID1.setAttribute("tl_y", Math.round(this.multipleHeight * (4.2 * this.baseHeight)).toString());
                student_ID1.setAttribute("br_x", Math.round(this.multipleWidth * (this.baseWidth * 21.2)).toString());
                student_ID1.setAttribute("br_y", Math.round(this.multipleHeight * (6.9 * this.baseHeight)).toString());

                page_ID.setAttribute("pos_type", "bottom_middle");
                page_ID.setAttribute("page_num", "1");
                page_ID.setAttribute("tl_x", Math.round(this.multipleWidth * (this.baseWidth * 14.5 - 1)).toString());
                page_ID.setAttribute("tl_y", Math.round(this.multipleHeight * (790 + 1.5 * this.baseHeight - 11)).toString());
                page_ID.setAttribute("br_x", Math.round(this.multipleWidth * (this.baseWidth * 14.5 + 5)).toString());
                page_ID.setAttribute("br_y", Math.round(this.multipleHeight * (790 + 1.5 * this.baseHeight + 1)).toString());
                this.baseWidth * 14.5, 790 + 1.5 * this.baseHeight,

                markers.setAttribute('num', '3');
                marker.setAttribute('pos_type', 'top_left');
                marker.setAttribute("tl_x", Math.round(this.multipleWidth * (this.baseWidth * 1.67)).toString());
                marker.setAttribute("tl_y", Math.round(this.multipleHeight * (this.baseHeight * 4.2)).toString());
                marker.setAttribute("br_x", Math.round(this.multipleWidth * (this.baseWidth * 2.37)).toString());
                marker.setAttribute("br_y", Math.round(this.multipleHeight * (this.baseHeight * 4.7)).toString());
                marker1.setAttribute('pos_type', 'bottom_left');
                marker1.setAttribute("tl_x", Math.round(this.multipleWidth * (this.baseWidth * 1.67)).toString());
                marker1.setAttribute("tl_y", Math.round(this.multipleHeight * (790 + 1.5 * this.baseHeight)).toString());
                marker1.setAttribute("br_x", Math.round(this.multipleWidth * (this.baseWidth * 2.37)).toString());
                marker1.setAttribute("br_y", Math.round(this.multipleHeight * (790 + 2 * this.baseHeight)).toString());
                marker2.setAttribute('pos_type', 'bottom_right');
                marker2.setAttribute("tl_x", Math.round(this.multipleWidth * (this.baseWidth * 24.5)).toString());
                marker2.setAttribute("tl_y", Math.round(this.multipleHeight * (790 + 1.5 * this.baseHeight)).toString());
                marker2.setAttribute("br_x", Math.round(this.multipleWidth * (this.baseWidth * 25.2)).toString());
                marker2.setAttribute("br_y", Math.round(this.multipleHeight * (790 + 2 * this.baseHeight)).toString());

                // var question_set = this.xmldom.createElement('question_set');
                // // var text = this.xmldom.createTextNode('hello');
                // // question_set.appendChild(text);
                // question_set.setAttribute('name', '第一题'); // 可以像在html中一样为元素添加属性
                // questions.appendChild(question_set);
                markers.appendChild(marker);
                markers.appendChild(marker1);
                markers.appendChild(marker2);
                page.appendChild(markers);
                page.appendChild(page_ID);
                this.sheet.appendChild(page);
                this.sheet.appendChild(student_ID);
                this.sheet.appendChild(student_ID1);
                console.log(this.sheet);
                this.xmldom.documentElement.appendChild(this.sheet);
                this.xmldom.documentElement.appendChild(this.xmlQuestions);

                var svg = Snap('#svg');
                var svg1 = Snap('#svg1');
                var svg2 = Snap('#svg2');
                var svg3 = Snap('#svg3');
                svg.paper.image("../../static/images/Unknown.png", 515, 3.73 * this.baseHeight, 70, 70);
                svg1.paper.image("../../static/images/Unknown.png", 515, 3.73 * this.baseHeight, 70, 70);
                svg2.paper.image("../../static/images/Unknown.png", 515, 3.73 * this.baseHeight, 70, 70);
                svg3.paper.image("../../static/images/Unknown.png", 515, 3.73 * this.baseHeight, 70, 70);
                this.drawFilledRect(this.baseWidth * 1.67, this.baseHeight * 4.2, this.baseWidth * 0.7, this.baseHeight * 0.5, svg);
                this.drawFilledRect(this.baseWidth * 1.67, this.baseHeight * 4.2, this.baseWidth * 0.7, this.baseHeight * 0.5, svg1);
                this.drawFilledRect(this.baseWidth * 1.67, this.baseHeight * 4.2, this.baseWidth * 0.7, this.baseHeight * 0.5, svg2);
                this.drawFilledRect(this.baseWidth * 1.67, this.baseHeight * 4.2, this.baseWidth * 0.7, this.baseHeight * 0.5, svg3);
                svg.paper.text(this.baseWidth * 9.5, this.baseHeight * 3.8, "姓名");
                svg2.paper.text(this.baseWidth * 9.5, this.baseHeight * 3.8, "姓名");
                svg.paper.text(this.baseWidth * 3.8, this.baseHeight * 5.2, "第");
                svg.paper.text(this.baseWidth * 4.6, this.baseHeight * 5.2, "1");
                svg.paper.text(this.baseWidth * 5.2, this.baseHeight * 5.2, "页");
                svg1.paper.text(this.baseWidth * 3.8, this.baseHeight * 5.2, "第");
                svg1.paper.text(this.baseWidth * 4.6, this.baseHeight * 5.2, "2");
                svg1.paper.text(this.baseWidth * 5.2, this.baseHeight * 5.2, "页");
                svg2.paper.text(this.baseWidth * 3.8, this.baseHeight * 5.2, "第");
                svg2.paper.text(this.baseWidth * 4.6, this.baseHeight * 5.2, "3");
                svg2.paper.text(this.baseWidth * 5.2, this.baseHeight * 5.2, "页");
                svg3.paper.text(this.baseWidth * 3.8, this.baseHeight * 5.2, "第");
                svg3.paper.text(this.baseWidth * 4.6, this.baseHeight * 5.2, "4");
                svg3.paper.text(this.baseWidth * 5.2, this.baseHeight * 5.2, "页");

                svg.paper.text(this.baseWidth * 5.2, this.baseHeight * 6.7, "班");

                svg.paper.line(this.baseWidth * 3.8, this.baseHeight * 6.7,
                    this.baseWidth * 4.8, this.baseHeight * 6.7).attr({
                    stroke: '#000',
                    strokeWidth: 1
                });

                svg2.paper.text(this.baseWidth * 5.2, this.baseHeight * 6.7, "班");

                svg2.paper.line(this.baseWidth * 3.8, this.baseHeight * 6.7,
                    this.baseWidth * 4.8, this.baseHeight * 6.7).attr({
                    stroke: '#000',
                    strokeWidth: 1
                });

                svg.paper.rect(this.baseWidth * 6.5, this.baseHeight * 4.2,
                    this.baseWidth * 7, this.baseHeight * 2.7).attr({
                    stroke: '#000',
                    style: 'fill-opacity :0',
                });
                this.drawLine(this.baseWidth * 8.25, this.baseHeight * 4.2, this.baseWidth * 8.25, this.baseHeight * 6.9, svg);
                this.drawLine(this.baseWidth * 10, this.baseHeight * 4.2, this.baseWidth * 10, this.baseHeight * 6.9, svg);
                this.drawLine(this.baseWidth * 11.75, this.baseHeight * 4.2, this.baseWidth * 11.75, this.baseHeight * 6.9, svg);

                this.drawRect(this.baseWidth * 14, this.baseHeight * 4.2, this.baseWidth * 7.2, this.baseHeight * 2.7, svg);
                this.drawLine(this.baseWidth * 15.44, this.baseHeight * 4.2, this.baseWidth * 15.44, this.baseHeight * 6.9, svg);
                this.drawLine(this.baseWidth * 16.88, this.baseHeight * 4.2, this.baseWidth * 16.88, this.baseHeight * 6.9, svg);
                this.drawLine(this.baseWidth * 18.22, this.baseHeight * 4.2, this.baseWidth * 18.22, this.baseHeight * 6.9, svg);
                this.drawLine(this.baseWidth * 19.66, this.baseHeight * 4.2, this.baseWidth * 19.66, this.baseHeight * 6.9, svg);

                svg2.paper.rect(this.baseWidth * 6.5, this.baseHeight * 4.2,
                    this.baseWidth * 7, this.baseHeight * 2.7).attr({
                    stroke: '#000',
                    style: 'fill-opacity :0',
                });
                this.drawLine(this.baseWidth * 8.25, this.baseHeight * 4.2, this.baseWidth * 8.25, this.baseHeight * 6.9, svg2);
                this.drawLine(this.baseWidth * 10, this.baseHeight * 4.2, this.baseWidth * 10, this.baseHeight * 6.9, svg2);
                this.drawLine(this.baseWidth * 11.75, this.baseHeight * 4.2, this.baseWidth * 11.75, this.baseHeight * 6.9, svg2);

                this.drawRect(this.baseWidth * 14, this.baseHeight * 4.2, this.baseWidth * 7.2, this.baseHeight * 2.7, svg2);
                this.drawLine(this.baseWidth * 15.44, this.baseHeight * 4.2, this.baseWidth * 15.44, this.baseHeight * 6.9, svg2);
                this.drawLine(this.baseWidth * 16.88, this.baseHeight * 4.2, this.baseWidth * 16.88, this.baseHeight * 6.9, svg2);
                this.drawLine(this.baseWidth * 18.22, this.baseHeight * 4.2, this.baseWidth * 18.22, this.baseHeight * 6.9, svg2);
                this.drawLine(this.baseWidth * 19.66, this.baseHeight * 4.2, this.baseWidth * 19.66, this.baseHeight * 6.9, svg2);

                this.drawFilledRect(this.baseWidth * 1.67, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg);
                this.drawFilledRect(this.baseWidth * 24.5, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg);
                this.drawFilledRect(this.baseWidth * 1.67, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg1);
                this.drawFilledRect(this.baseWidth * 24.5, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg1);
                this.drawFilledRect(this.baseWidth * 1.67, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg2);
                this.drawFilledRect(this.baseWidth * 24.5, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg2);
                this.drawFilledRect(this.baseWidth * 1.67, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg3);
                this.drawFilledRect(this.baseWidth * 24.5, 790 + 1.5 * this.baseHeight, this.baseWidth * 0.7, this.baseHeight * 0.5, svg3);
                svg.paper.text(this.baseWidth * 14.5, 790 + 1.5 * this.baseHeight, "1").attr({
                    fontSize: 13
                });
                svg1.paper.text(this.baseWidth * 14.5, 790 + 1.5 * this.baseHeight, "2").attr({
                    fontSize: 13
                });
                svg2.paper.text(this.baseWidth * 14.5, 790 + 1.5 * this.baseHeight, "3").attr({
                    fontSize: 13
                });
                svg3.paper.text(this.baseWidth * 14.5, 790 + 1.5 * this.baseHeight, "4").attr({
                    fontSize: 13
                });
            },
            handleChange() {

            },
            handleChangeExamName() {
                var svg = Snap('#svg');
                this.drawFilledWhiteRect(0, 100, 650, 17, svg);
                //  fill: none;"
                this.fragment = Snap.parse('<path d="M296.125 0L296.125 832"/>\n' +
                    '<text x="296.125" y="115" style="font-size:18px;text-anchor: middle">' + this.param.examName + '</text>');
                svg.add(this.fragment);
                this.xmldom.documentElement.setAttribute('name', this.param.examName);
            },
            handleChangeNumberType() {
                var svg = Snap('#svg');
                var svg2 = Snap('#svg2');
                if (this.text !== undefined) {
                    this.text.remove();
                    this.text_page3.remove();
                }
                if (this.param.examType === '考号') {
                    this.text = svg.paper.text(this.baseWidth * 17, this.baseHeight * 3.8, "考号");
                    this.text_page3 = svg2.paper.text(this.baseWidth * 17, this.baseHeight * 3.8, "考号");
                } else {
                    this.text = svg.paper.text(this.baseWidth * 17, this.baseHeight * 3.8, "学号");
                    this.text_page3 = svg2.paper.text(this.baseWidth * 17, this.baseHeight * 3.8, "学号");
                }

            },
            handleChangeSealingWire() {
                var svg = Snap('#svg');
                var svg1 = Snap('#svg1');
                var svg2 = Snap('#svg2');
                var svg3 = Snap('#svg3');

                if (this.param.line === '有') {
                    this.text1_1 = svg.paper.text(this.baseWidth * 6.5, this.baseHeight * 7.62, "装");
                    this.text1_2 = svg.paper.text(292, this.baseHeight * 7.62, "订");
                    this.text1_3 = svg.paper.text(this.baseWidth * 21.5, this.baseHeight * 7.62, "线");
                    this.line1 = svg.paper.line(this.baseWidth * 1, this.baseHeight * 7.87, this.baseWidth * 27, this.baseHeight * 7.87).attr({
                        stroke: '#000',
                        strokeWidth: 1
                    });
                    this.text2_1 = svg1.paper.text(this.baseWidth * 6.5, this.baseHeight * 7.62, "装");
                    this.text2_2 = svg1.paper.text(292, this.baseHeight * 7.62, "订");
                    this.text2_3 = svg1.paper.text(this.baseWidth * 21.5, this.baseHeight * 7.62, "线");
                    this.line2 = svg1.paper.line(this.baseWidth * 1, this.baseHeight * 7.87, this.baseWidth * 27, this.baseHeight * 7.87).attr({
                        stroke: '#000',
                        strokeWidth: 1
                    });
                    this.text3_1 = svg2.paper.text(this.baseWidth * 6.5, this.baseHeight * 7.62, "装");
                    this.text3_2 = svg2.paper.text(292, this.baseHeight * 7.62, "订");
                    this.text3_3 = svg2.paper.text(this.baseWidth * 21.5, this.baseHeight * 7.62, "线");
                    this.line3 = svg2.paper.line(this.baseWidth * 1, this.baseHeight * 7.87, this.baseWidth * 27, this.baseHeight * 7.87).attr({
                        stroke: '#000',
                        strokeWidth: 1
                    });
                    this.text4_1 = svg3.paper.text(this.baseWidth * 6.5, this.baseHeight * 7.62, "装");
                    this.text4_2 = svg3.paper.text(292, this.baseHeight * 7.62, "订");
                    this.text4_3 = svg3.paper.text(this.baseWidth * 21.5, this.baseHeight * 7.62, "线");
                    this.line4 = svg3.paper.line(this.baseWidth * 1, this.baseHeight * 7.87, this.baseWidth * 27, this.baseHeight * 7.87).attr({
                        stroke: '#000',
                        strokeWidth: 1
                    });
                } else {
                    this.text1_1.remove();
                    this.text1_2.remove();
                    this.text1_3.remove();
                    this.line1.remove();
                    this.text2_1.remove();
                    this.text2_2.remove();
                    this.text2_3.remove();
                    this.line2.remove();
                    this.text3_1.remove();
                    this.text3_2.remove();
                    this.text3_3.remove();
                    this.line3.remove();
                    this.text4_1.remove();
                    this.text4_2.remove();
                    this.text4_3.remove();
                    this.line4.remove();
                }
            },
            handleObjectiveClick() {
                this.editObjective = true
            },
            toAddObjective() {
                if (this.objectStart > this.objectEnd) {
                    return
                }
                var question_set = this.xmldom.createElement('question_set');
                question_set.setAttribute('name', '选择题'); // 可以像在html中一样为元素添加属性
                question_set.setAttribute('type', 'single_selection');
                question_set.setAttribute('qid', this.qid.toString());
                this.qid++;
                this.xmlQuestions.appendChild(question_set);
                var svg = Snap('#svg');
                svg.paper.text(this.baseWidth * 1.67, this.bottomPX + 10, "选择题").attr({
                    fontSize: 11.5
                });
                this.bottomPX = this.bottomPX + 14;
                let top = this.bottomPX;
                if (this.rectObjective !== undefined) {
                    this.rectObjective.remove();
                }
                if (this.objectEnd % 20 >= 5) {
                    this.rectObjective = svg.paper.rect(this.baseWidth * 1.67, this.bottomPX, 22.75 * this.baseWidth,
                        ((Math.floor((this.objectEnd - 1) / 20)) * 5 + Math.floor(this.objectEnd / 20) * 2 + 6) * this.baseHeight).attr({
                        stroke: '#000',
                        style: 'fill-opacity :0'
                    });
                    this.bottomPX = this.bottomPX + ((Math.floor((this.objectEnd - 1) / 20)) * 5 + Math.floor(this.objectEnd / 20) * 2 + 6) * this.baseHeight;
                } else if (this.objectEnd % 20 === 0) {
                    this.rectObjective = svg.paper.rect(this.baseWidth * 1.67, this.bottomPX, 22.75 * this.baseWidth,
                        (((this.objectEnd) / 20) * 5 + this.objectEnd % 5 + 1 + (this.objectEnd / 20 * 2)) * this.baseHeight).attr({
                        stroke: '#000',
                        style: 'fill-opacity :0'
                    });
                    this.bottomPX = this.bottomPX + (((this.objectEnd) / 20) * 5 + this.objectEnd % 5 + 1 + (this.objectEnd / 20 * 2)) * this.baseHeight;
                } else {
                    this.rectObjective = svg.paper.rect(this.baseWidth * 1.67, this.bottomPX, 22.75 * this.baseWidth,
                        ((Math.floor((this.objectEnd - 1) / 20)) * 5 + this.objectEnd % 5 + 1 + Math.floor(this.objectEnd / 20) * 2) * this.baseHeight).attr({
                        stroke: '#000',
                        style: 'fill-opacity :0'
                    });
                    this.bottomPX = this.bottomPX + ((Math.floor((this.objectEnd - 1) / 20)) * 5 + this.objectEnd % 5 + 1 + Math.floor(this.objectEnd / 20) * 2) * this.baseHeight;
                }
                let option = this.defaultSelection.slice(0);
                for (let j = 0; j < this.defaultSelection.length; j++) {
                    this.defaultSelection[j] = "[ " + this.defaultSelection[j] + " ] "
                }
                for (let i = this.objectStart; i <= this.objectEnd; i++) {
                    var question = this.xmldom.createElement('question');
                    question.setAttribute('name', this.qid.toString()); // 可以像在html中一样为元素添加属性
                    question.setAttribute('full_score', '2');
                    question.setAttribute('qid', this.qid.toString());
                    question_set.appendChild(question);
                    this.qid++;
                    svg.paper.text(this.baseWidth * (3 + (Math.floor((i - 1) / 5) * 5) - (Math.floor((i - 1) / 20) * 20)),
                        top + (this.baseHeight * ((i - 1) % 5 + 2)) + (Math.floor((i - 1) / 20) * (this.baseHeight * 6 + 2)), i);
                    for (let k = 0; k < this.defaultSelection.slice(0).length; k++) {
                        svg.paper.text(this.baseWidth * (4 + (Math.floor((i - 1) / 5) * 5) - (Math.floor((i - 1) / 20) * 20)) + 17 * k,
                            top + (this.baseHeight * ((i - 1) % 5 + 2)) + (Math.floor((i - 1) / 20) * (this.baseHeight * 6 + 2)),
                            this.defaultSelection.slice(0)[k]).attr({
                            fontSize: 6
                        });
                        let options = this.xmldom.createElement('option');
                        options.setAttribute('option_name', option[k]);
                        options.setAttribute('filled', '0');
                        options.setAttribute('tl_x', Math.round(1653 / 592 * (this.baseWidth * (4 + (Math.floor((i - 1) / 5) * 5) - (Math.floor((i - 1) / 20) * 20)) + 17 * k)).toString());
                        options.setAttribute('tl_y', Math.round(2338 / 837 * (top + (this.baseHeight * ((i - 1) % 5 + 2)) + (Math.floor((i - 1) / 20) * (this.baseHeight * 6 + 2)) - 4)).toString());
                        options.setAttribute('br_x', Math.round(1653 / 592 * (this.baseWidth * (4 + (Math.floor((i - 1) / 5) * 5) - (Math.floor((i - 1) / 20) * 20)) + 17 * k + 10)).toString());
                        options.setAttribute('br_y', Math.round(2338 / 837 * (top + (this.baseHeight * ((i - 1) % 5 + 2)) + (Math.floor((i - 1) / 20) * (this.baseHeight * 6 + 2)) + 1)).toString());
                        question.appendChild(options);
                    }
                    this.objective.push({num: i, options: option})
                }
                this.defaultSelection = ['A', 'B', 'C', 'D']
                this.objectStart = parseInt(this.objectEnd) + 1
                this.objectEnd = ''
                this.editObjective = false
            },
            toAddSubject() {
                let question_set = this.xmldom.createElement('question_set');
                question_set.setAttribute('name', this.addSubjectParam.name); // 可以像在html中一样为元素添加属性
                question_set.setAttribute('type', 'subjective');
                question_set.setAttribute('qid', this.qid.toString());
                this.qid++;
                this.xmlQuestions.appendChild(question_set);
                let question = this.xmldom.createElement('question');
                question.setAttribute('name', '总分'); // 可以像在html中一样为元素添加属性
                question.setAttribute('page_num', this.currentPage.toString());
                question.setAttribute('full_score', '10');
                question.setAttribute('type', 'subjective');
                question.setAttribute('sub_type', 'total_score');
                question.setAttribute('qid', this.qid.toString());
                this.qid++;

                let svg = undefined;
                switch (this.currentPage) {
                    case 1 :
                        svg = Snap('#svg');
                        break;
                    case 2 :
                        svg = Snap("#svg1");
                        break;
                    case 3 :
                        svg = Snap('#svg2');
                        break;
                    case 4 :
                        svg = Snap("#svg3");
                        break;
                }
                this.subjective.push({
                    name: this.addSubjectParam.name,
                    fill: this.addSubjectParam.fill,
                    size: this.addSubjectParam.size,
                    point: this.addSubjectParam.point,
                    position: this.addSubjectParam.position,
                    stepScoreNum: this.addSubjectParam.stepScoreNum,
                });
                this.addSubjective = false;
                var lastHeight = 0;
                if (this.addSubjectParam.position === 'right') {
                    //步骤少
                    if (parseInt(this.addSubjectParam.stepScoreNum) < parseInt(this.addSubjectParam.size)) {
                        if (this.bottomPX + 10 + (this.addSubjectParam.size * this.baseHeight * 2.7) > 775) {
                            lastHeight = (this.addSubjectParam.size * this.baseHeight * 2.7) - (775 - this.bottomPX - 10);
                            let svgNext = Snap('#svg' + this.currentPage);
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 20.07 * this.baseWidth,
                                (775 - this.bottomPX - 10)).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.rectSubjective.push(svgNext.paper.rect(this.baseWidth * 1.67, 130, 20.07 * this.baseWidth,
                                lastHeight).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (775 - this.bottomPX - 10)) * this.multipleHeight).toString());
                            let answer_section1 = this.xmldom.createElement('answer_section');
                            answer_section1.setAttribute('page_num', (this.currentPage + 1).toString());
                            answer_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                            answer_section1.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section1.setAttribute('br_y', Math.round((130 + lastHeight) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question.appendChild(answer_section1);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            //画步骤
                            let preHeight = Math.floor((775 - (this.bottomPX + 10 + this.baseHeight * 2.7)) / (2.7 * this.baseHeight));
                            console.log("preheight" + preHeight)
                            if (preHeight > this.addSubjectParam.stepScoreNum) {
                                preHeight = this.addSubjectParam.stepScoreNum;
                            }
                            if (preHeight > 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                    preHeight * this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                for (let k = 1; k < preHeight; k++) {
                                    this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                        stroke: '#000',
                                        strokeWidth: 1
                                    }));
                                    let questionStep = this.xmldom.createElement('question');
                                    questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                    questionStep.setAttribute('page_num', this.currentPage.toString());
                                    questionStep.setAttribute('full_score', '10');
                                    questionStep.setAttribute('type', 'subjective');
                                    questionStep.setAttribute('sub_type', 'subitem');
                                    questionStep.setAttribute('qid', this.qid.toString());
                                    this.qid++;
                                    let score_section = this.xmldom.createElement('score_section');
                                    score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                    score_section.setAttribute('border_type', 'solid_box');
                                    score_section.setAttribute('digit_num', '1');
                                    score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                    score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                    score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                    score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                    questionStep.appendChild(score_section)
                                    question_set.appendChild(questionStep);
                                }
                            } else if (preHeight == 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth, this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            this.rectSubjectiveStepScore.push(svgNext.paper.rect(this.baseWidth * 23.18, 130, 1.44 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            if (this.addSubjectParam.stepScoreNum > preHeight) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', (this.currentPage + 1).toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((130 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum - preHeight; k++) {
                                this.lineSubjectiveStepLine.push(svgNext.paper.line(this.baseWidth * 23.18, 130 + (this.baseHeight * 2.7) * k, this.baseWidth * 24.62, 130 + (this.baseHeight * 2.7) * k).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        } else {
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 20.07 * this.baseWidth,
                                this.addSubjectParam.size * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));

                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '1');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.addSubjectParam.size * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question_set.appendChild(question);

                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let questionStep = this.xmldom.createElement('question');
                            questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                            questionStep.setAttribute('page_num', this.currentPage.toString());
                            questionStep.setAttribute('full_score', '10');
                            questionStep.setAttribute('type', 'subjective');
                            questionStep.setAttribute('sub_type', 'subitem');
                            questionStep.setAttribute('qid', this.qid.toString());
                            this.qid++;
                            let score_section1 = this.xmldom.createElement('score_section');
                            score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section1.setAttribute('border_type', 'solid_box');
                            score_section1.setAttribute('digit_num', '1');
                            score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                            score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                            score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                            questionStep.appendChild(score_section1);
                            question_set.appendChild(questionStep);
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum; k++) {
                                this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        }
                    } else { //步骤多
                        if (this.bottomPX + 10 + ((this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) > 775) {
                            let preHeight = Math.floor((775 - (this.bottomPX + 10 + this.baseHeight * 2.7)) / (2.7 * this.baseHeight));

                            if (preHeight > this.addSubjectParam.stepScoreNum) {
                                preHeight = this.addSubjectParam.stepScoreNum;
                            }
                            let svgNext = Snap('#svg' + this.currentPage);
                            lastHeight = ((this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) - (775 - this.bottomPX - 10);
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 20.07 * this.baseWidth,
                                775 - this.bottomPX - 10).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.rectSubjective.push(svgNext.paper.rect(this.baseWidth * 1.67, 130, 20.07 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * 2.7 * this.baseHeight).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '1');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (775 - this.bottomPX - 10)) * this.multipleHeight).toString());
                            let answer_section1 = this.xmldom.createElement('answer_section');
                            answer_section1.setAttribute('page_num', (this.currentPage + 1).toString());
                            answer_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                            answer_section1.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section1.setAttribute('br_y', Math.round((130 + lastHeight) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question.appendChild(answer_section1);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            //画步骤

                            if (preHeight > 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                    preHeight * this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                for (let k = 1; k < preHeight; k++) {
                                    this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                        stroke: '#000',
                                        strokeWidth: 1
                                    }))
                                    let questionStep = this.xmldom.createElement('question');
                                    questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                    questionStep.setAttribute('page_num', this.currentPage.toString());
                                    questionStep.setAttribute('full_score', '10');
                                    questionStep.setAttribute('type', 'subjective');
                                    questionStep.setAttribute('sub_type', 'subitem');
                                    questionStep.setAttribute('qid', this.qid.toString());
                                    this.qid++;
                                    let score_section = this.xmldom.createElement('score_section');
                                    score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                    score_section.setAttribute('border_type', 'solid_box');
                                    score_section.setAttribute('digit_num', '1');
                                    score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                    score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                    score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                    score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                    questionStep.appendChild(score_section)
                                    question_set.appendChild(questionStep);
                                }
                            } else if (preHeight == 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth, this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            this.rectSubjectiveStepScore.push(svgNext.paper.rect(this.baseWidth * 23.18, 130, 1.44 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            if (this.addSubjectParam.stepScoreNum > preHeight) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', (this.currentPage + 1).toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((130 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum - preHeight; k++) {
                                this.lineSubjectiveStepLine.push(svgNext.paper.line(this.baseWidth * 23.18, 130 + (this.baseHeight * 2.7) * k, this.baseWidth * 24.62, 130 + (this.baseHeight * 2.7) * k).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        } else {
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 20.07 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let questionStep = this.xmldom.createElement('question');
                            questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                            questionStep.setAttribute('page_num', this.currentPage.toString());
                            questionStep.setAttribute('full_score', '10');
                            questionStep.setAttribute('type', 'subjective');
                            questionStep.setAttribute('sub_type', 'subitem');
                            questionStep.setAttribute('qid', this.qid.toString());
                            this.qid++;
                            let score_section1 = this.xmldom.createElement('score_section');
                            score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section1.setAttribute('border_type', 'solid_box');
                            score_section1.setAttribute('digit_num', '1');
                            score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                            score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                            score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                            questionStep.appendChild(score_section1);
                            question_set.appendChild(questionStep);
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum; k++) {
                                this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        }
                        console.log(this.xmldom)
                    }
                } else if (this.addSubjectParam.position === 'inner') {
                    if (parseInt(this.addSubjectParam.stepScoreNum) < parseInt(this.addSubjectParam.size)) {
                        if (this.bottomPX + 10 + (this.addSubjectParam.size * this.baseHeight * 2.7) > 775) { //步骤少
                            lastHeight = (this.addSubjectParam.size * this.baseHeight * 2.7) - (775 - this.bottomPX - 10);
                            let svgNext = Snap('#svg' + this.currentPage);
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 22.95 * this.baseWidth,
                                (775 - this.bottomPX - 10)).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.rectSubjective.push(svgNext.paper.rect(this.baseWidth * 1.67, 130, 22.95 * this.baseWidth,
                                lastHeight).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (775 - this.bottomPX - 10)) * this.multipleHeight).toString());
                            let answer_section1 = this.xmldom.createElement('answer_section');
                            answer_section1.setAttribute('page_num', (this.currentPage + 1).toString());
                            answer_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                            answer_section1.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section1.setAttribute('br_y', Math.round((130 + lastHeight) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question.appendChild(answer_section1);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            //画步骤
                            let preHeight = Math.floor((775 - (this.bottomPX + 10 + this.baseHeight * 2.7)) / (2.7 * this.baseHeight));
                            console.log("preheight" + preHeight)
                            if (preHeight > this.addSubjectParam.stepScoreNum) {
                                preHeight = this.addSubjectParam.stepScoreNum;
                            }
                            if (preHeight > 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                    preHeight * this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                for (let k = 1; k < preHeight; k++) {
                                    this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                        stroke: '#000',
                                        strokeWidth: 1
                                    }))
                                    let questionStep = this.xmldom.createElement('question');
                                    questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                    questionStep.setAttribute('page_num', this.currentPage.toString());
                                    questionStep.setAttribute('full_score', '10');
                                    questionStep.setAttribute('type', 'subjective');
                                    questionStep.setAttribute('sub_type', 'subitem');
                                    questionStep.setAttribute('qid', this.qid.toString());
                                    this.qid++;
                                    let score_section = this.xmldom.createElement('score_section');
                                    score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                    score_section.setAttribute('border_type', 'solid_box');
                                    score_section.setAttribute('digit_num', '1');
                                    score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                    score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                    score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                    score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                    questionStep.appendChild(score_section)
                                    question_set.appendChild(questionStep);
                                }
                            } else if (preHeight == 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth, this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            this.rectSubjectiveStepScore.push(svgNext.paper.rect(this.baseWidth * 23.18, 130, 1.44 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            if (this.addSubjectParam.stepScoreNum > preHeight) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', (this.currentPage + 1).toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((130 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum - preHeight; k++) {
                                this.lineSubjectiveStepLine.push(svgNext.paper.line(this.baseWidth * 23.18, 130 + (this.baseHeight * 2.7) * k, this.baseWidth * 24.62, 130 + (this.baseHeight * 2.7) * k).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        } else {
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 22.95 * this.baseWidth,
                                this.addSubjectParam.size * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let questionStep = this.xmldom.createElement('question');
                            questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                            questionStep.setAttribute('page_num', this.currentPage.toString());
                            questionStep.setAttribute('full_score', '10');
                            questionStep.setAttribute('type', 'subjective');
                            questionStep.setAttribute('sub_type', 'subitem');
                            questionStep.setAttribute('qid', this.qid.toString());
                            this.qid++;
                            let score_section1 = this.xmldom.createElement('score_section');
                            score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section1.setAttribute('border_type', 'solid_box');
                            score_section1.setAttribute('digit_num', '1');
                            score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                            score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                            score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                            questionStep.appendChild(score_section1);
                            question_set.appendChild(questionStep);
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum; k++) {
                                this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        }
                    } else { //步骤多
                        if (this.bottomPX + 10 + ((this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) > 775) {
                            let svgNext = Snap('#svg' + this.currentPage);
                            let preHeight = Math.floor((775 - (this.bottomPX + 10 + this.baseHeight * 2.7)) / (2.7 * this.baseHeight));
                            if (preHeight > this.addSubjectParam.stepScoreNum) {
                                preHeight = this.addSubjectParam.stepScoreNum;
                            }
                            lastHeight = ((this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) - (775 - this.bottomPX - 10);
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 22.95 * this.baseWidth,
                                775 - this.bottomPX - 10).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.rectSubjective.push(svgNext.paper.rect(this.baseWidth * 1.67, 130, 22.95 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (775 - this.bottomPX - 10)) * this.multipleHeight).toString());
                            let answer_section1 = this.xmldom.createElement('answer_section');
                            answer_section1.setAttribute('page_num', (this.currentPage + 1).toString());
                            answer_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                            answer_section1.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section1.setAttribute('br_y', Math.round((130 + lastHeight) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question.appendChild(answer_section1);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            //画步骤

                            if (preHeight > 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                    preHeight * this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                for (let k = 1; k < preHeight; k++) {
                                    this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                        stroke: '#000',
                                        strokeWidth: 1
                                    }))
                                    let questionStep = this.xmldom.createElement('question');
                                    questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                    questionStep.setAttribute('page_num', this.currentPage.toString());
                                    questionStep.setAttribute('full_score', '10');
                                    questionStep.setAttribute('type', 'subjective');
                                    questionStep.setAttribute('sub_type', 'subitem');
                                    questionStep.setAttribute('qid', this.qid.toString());
                                    this.qid++;
                                    let score_section = this.xmldom.createElement('score_section');
                                    score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                    score_section.setAttribute('border_type', 'solid_box');
                                    score_section.setAttribute('digit_num', '1');
                                    score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                    score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                    score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                    score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                    questionStep.appendChild(score_section)
                                    question_set.appendChild(questionStep);
                                }
                            } else if (preHeight == 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth, this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            this.rectSubjectiveStepScore.push(svgNext.paper.rect(this.baseWidth * 23.18, 130, 1.44 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            if (this.addSubjectParam.stepScoreNum > preHeight) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', (this.currentPage + 1).toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((130 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum - preHeight; k++) {
                                this.lineSubjectiveStepLine.push(svgNext.paper.line(this.baseWidth * 23.18, 130 + (this.baseHeight * 2.7) * k, this.baseWidth * 24.62, 130 + (this.baseHeight * 2.7) * k).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        } else {
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 22.95 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 21.74 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 22.37 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 21.74, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10, this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 23.18, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let questionStep = this.xmldom.createElement('question');
                            questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                            questionStep.setAttribute('page_num', this.currentPage.toString());
                            questionStep.setAttribute('full_score', '10');
                            questionStep.setAttribute('type', 'subjective');
                            questionStep.setAttribute('sub_type', 'subitem');
                            questionStep.setAttribute('qid', this.qid.toString());
                            this.qid++;
                            let score_section1 = this.xmldom.createElement('score_section');
                            score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section1.setAttribute('border_type', 'solid_box');
                            score_section1.setAttribute('digit_num', '1');
                            score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                            score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                            score_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                            questionStep.appendChild(score_section1);
                            question_set.appendChild(questionStep);
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum; k++) {
                                this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 23.18, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 24.62, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 23.18 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        }
                    }
                } else {
                    if (parseInt(this.addSubjectParam.stepScoreNum) < parseInt(this.addSubjectParam.size)) {
                        if (this.bottomPX + 10 + (this.addSubjectParam.size * this.baseHeight * 2.7) > 775) { //步骤少
                            lastHeight = (this.addSubjectParam.size * this.baseHeight * 2.7) - (775 - this.bottomPX - 10);
                            let svgNext = Snap('#svg' + this.currentPage);
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 4.55, this.bottomPX + 10, 20.07 * this.baseWidth,
                                (775 - this.bottomPX - 10)).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.rectSubjective.push(svgNext.paper.rect(this.baseWidth * 4.55, 130, 20.07 * this.baseWidth,
                                lastHeight).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (775 - this.bottomPX - 10)) * this.multipleHeight).toString());
                            let answer_section1 = this.xmldom.createElement('answer_section');
                            answer_section1.setAttribute('page_num', (this.currentPage + 1).toString());
                            answer_section1.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            answer_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                            answer_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            answer_section1.setAttribute('br_y', Math.round((130 + lastHeight) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question.appendChild(answer_section1);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 3.11, this.bottomPX + 10, this.baseWidth * 3.11, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            //画步骤
                            let preHeight = Math.floor((775 - (this.bottomPX + 10 + this.baseHeight * 2.7)) / (2.7 * this.baseHeight));
                            if (preHeight > this.addSubjectParam.stepScoreNum) {
                                preHeight = this.addSubjectParam.stepScoreNum;
                            }
                            console.log("preheight" + preHeight)
                            if (preHeight > 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                    preHeight * this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                for (let k = 1; k < preHeight; k++) {
                                    this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 1.67, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 3.11, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                        stroke: '#000',
                                        strokeWidth: 1
                                    }))
                                    let questionStep = this.xmldom.createElement('question');
                                    questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                    questionStep.setAttribute('page_num', this.currentPage.toString());
                                    questionStep.setAttribute('full_score', '10');
                                    questionStep.setAttribute('type', 'subjective');
                                    questionStep.setAttribute('sub_type', 'subitem');
                                    questionStep.setAttribute('qid', this.qid.toString());
                                    this.qid++;
                                    let score_section = this.xmldom.createElement('score_section');
                                    score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                    score_section.setAttribute('border_type', 'solid_box');
                                    score_section.setAttribute('digit_num', '1');
                                    score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                    score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                    score_section.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                    score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                    questionStep.appendChild(score_section)
                                    question_set.appendChild(questionStep);
                                }
                            } else if (preHeight == 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth, this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            this.rectSubjectiveStepScore.push(svgNext.paper.rect(this.baseWidth * 1.67, 130, 1.44 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            if (this.addSubjectParam.stepScoreNum > preHeight) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', (this.currentPage + 1).toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((130 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum - preHeight; k++) {
                                this.lineSubjectiveStepLine.push(svgNext.paper.line(this.baseWidth * 1.67, 130 + (this.baseHeight * 2.7) * k, this.baseWidth * 3.11, 130 + (this.baseHeight * 2.7) * k).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        } else {
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 4.55, this.bottomPX + 10, 20.07 * this.baseWidth,
                                this.addSubjectParam.size * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 3.11, this.bottomPX + 10, this.baseWidth * 3.11, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let questionStep = this.xmldom.createElement('question');
                            questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                            questionStep.setAttribute('page_num', this.currentPage.toString());
                            questionStep.setAttribute('full_score', '10');
                            questionStep.setAttribute('type', 'subjective');
                            questionStep.setAttribute('sub_type', 'subitem');
                            questionStep.setAttribute('qid', this.qid.toString());
                            this.qid++;
                            let score_section1 = this.xmldom.createElement('score_section');
                            score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section1.setAttribute('border_type', 'solid_box');
                            score_section1.setAttribute('digit_num', '1');
                            score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                            score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                            score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                            questionStep.appendChild(score_section1);
                            question_set.appendChild(questionStep);
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum; k++) {
                                this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 1.67, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 3.11, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        }
                    } else {
                        if (this.bottomPX + 10 + ((this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) > 775) { //步骤多
                            let svgNext = Snap('#svg' + this.currentPage);
                            let preHeight = Math.floor((775 - (this.bottomPX + 10 + this.baseHeight * 2.7)) / (2.7 * this.baseHeight));
                            if (preHeight > this.addSubjectParam.stepScoreNum) {
                                preHeight = this.addSubjectParam.stepScoreNum;
                            }
                            lastHeight = ((this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) - (775 - this.bottomPX - 10);
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 4.55, this.bottomPX + 10, 20.07 * this.baseWidth,
                                775 - this.bottomPX - 10).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.rectSubjective.push(svgNext.paper.rect(this.baseWidth * 4.55, 130, 20.07 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (775 - this.bottomPX - 10)) * this.multipleHeight).toString());
                            let answer_section1 = this.xmldom.createElement('answer_section');
                            answer_section1.setAttribute('page_num', (this.currentPage + 1).toString());
                            answer_section1.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            answer_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                            answer_section1.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            answer_section1.setAttribute('br_y', Math.round((130 + lastHeight) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question.appendChild(answer_section1);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 3.11, this.bottomPX + 10, this.baseWidth * 3.11, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            //画步骤

                            if (preHeight > 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                    preHeight * this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                for (let k = 1; k < preHeight; k++) {
                                    this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 1.67, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 3.11, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                        stroke: '#000',
                                        strokeWidth: 1
                                    }))
                                    let questionStep = this.xmldom.createElement('question');
                                    questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                    questionStep.setAttribute('page_num', this.currentPage.toString());
                                    questionStep.setAttribute('full_score', '10');
                                    questionStep.setAttribute('type', 'subjective');
                                    questionStep.setAttribute('sub_type', 'subitem');
                                    questionStep.setAttribute('qid', this.qid.toString());
                                    this.qid++;
                                    let score_section = this.xmldom.createElement('score_section');
                                    score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                    score_section.setAttribute('border_type', 'solid_box');
                                    score_section.setAttribute('digit_num', '1');
                                    score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                    score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                    score_section.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                    score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                    questionStep.appendChild(score_section)
                                    question_set.appendChild(questionStep);
                                }
                            } else if (preHeight == 1) {
                                this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth, this.baseHeight * 2.7).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                }));
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            this.rectSubjectiveStepScore.push(svgNext.paper.rect(this.baseWidth * 1.67, 130, 1.44 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum - preHeight) * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            if (this.addSubjectParam.stepScoreNum > preHeight) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', (this.currentPage + 1).toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((130 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                            }
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum - preHeight; k++) {
                                this.lineSubjectiveStepLine.push(svgNext.paper.line(this.baseWidth * 1.67, 130 + (this.baseHeight * 2.7) * k, this.baseWidth * 3.11, 130 + (this.baseHeight * 2.7) * k).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (preHeight + k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((130 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        } else {
                            this.rectSubjective.push(svg.paper.rect(this.baseWidth * 4.55, this.bottomPX + 10, 20.07 * this.baseWidth,
                                (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let score_section = this.xmldom.createElement('score_section');
                            score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section.setAttribute('border_type', 'solid_box');
                            score_section.setAttribute('digit_num', '2');
                            score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            score_section.setAttribute('br_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                            let answer_section = this.xmldom.createElement('answer_section');
                            answer_section.setAttribute('page_num', this.currentPage.toString());
                            answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                            answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                            answer_section.setAttribute('br_x', Math.round(this.baseWidth * 24.62 * this.multipleWidth).toString());
                            answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight)) * this.multipleHeight).toString());
                            question.appendChild(score_section);
                            question.appendChild(answer_section);
                            question_set.appendChild(question);
                            this.rectSubjectiveScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10, 2.88 * this.baseWidth,
                                this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            this.lineSubjectiveScore.push(svg.paper.line(this.baseWidth * 3.11, this.bottomPX + 10, this.baseWidth * 3.11, this.bottomPX + 10 + this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                strokeWidth: 1
                            }));
                            this.rectSubjectiveStepScore.push(svg.paper.rect(this.baseWidth * 1.67, this.bottomPX + 10 + this.baseHeight * 2.7, 1.44 * this.baseWidth,
                                this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7).attr({
                                stroke: '#000',
                                style: 'fill-opacity :0'
                            }));
                            let questionStep = this.xmldom.createElement('question');
                            questionStep.setAttribute('name', '步骤1'); // 可以像在html中一样为元素添加属性
                            questionStep.setAttribute('page_num', this.currentPage.toString());
                            questionStep.setAttribute('full_score', '10');
                            questionStep.setAttribute('type', 'subjective');
                            questionStep.setAttribute('sub_type', 'subitem');
                            questionStep.setAttribute('qid', this.qid.toString());
                            this.qid++;
                            let score_section1 = this.xmldom.createElement('score_section');
                            score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                            score_section1.setAttribute('border_type', 'solid_box');
                            score_section1.setAttribute('digit_num', '1');
                            score_section1.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                            score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7)) * this.multipleHeight).toString());
                            score_section1.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                            score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * 2) * this.multipleHeight).toString());
                            questionStep.appendChild(score_section1);
                            question_set.appendChild(questionStep);
                            for (let k = 1; k < this.addSubjectParam.stepScoreNum; k++) {
                                this.lineSubjectiveStepLine.push(svg.paper.line(this.baseWidth * 1.67, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1), this.baseWidth * 3.11, this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                }))
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', '步骤' + (k + 1)); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section = this.xmldom.createElement('score_section');
                                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section.setAttribute('border_type', 'solid_box');
                                score_section.setAttribute('digit_num', '1');
                                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                                score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 1)) * this.multipleHeight).toString());
                                score_section.setAttribute('br_x', Math.round(this.baseWidth * 3.11 * this.multipleWidth).toString());
                                score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + (this.baseHeight * 2.7) * (k + 2)) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section)
                                question_set.appendChild(questionStep);
                            }
                            this.lineSubjectiveStepScore.push(this.lineSubjectiveStepLine);
                        }
                    }
                }
                if (parseInt(this.addSubjectParam.stepScoreNum) < parseInt(this.addSubjectParam.size)) {
                    this.bottomPX = this.bottomPX + 10 + this.addSubjectParam.size * this.baseHeight * 2.7;
                } else {
                    this.bottomPX = this.bottomPX + 10 + (this.addSubjectParam.stepScoreNum * this.baseHeight * 2.7) + (2.7 * this.baseHeight);
                }
                if (this.bottomPX > 775 || 10 + this.bottomPX + 2.7 * this.baseHeight > 775) {
                    this.bottomPX = 130 + Math.ceil(lastHeight / (2.7 * this.baseHeight)) * 2.7 * this.baseHeight;
                    document.getElementById("page" + this.currentPage).style.display = 'block';
                    this.currentPage++;
                }
                console.log(this.xmldom)
            },
            toAddBlanks() {
                this.blanks.push(this.deepClone(this.addBlanksParam))
                // this.addBlanksParam = {}
                let question_set = this.xmldom.createElement('question_set');
                question_set.setAttribute('name', this.addSubjectParam.name); // 可以像在html中一样为元素添加属性
                question_set.setAttribute('type', 'subjective');
                question_set.setAttribute('qid', this.qid.toString());
                this.qid++;
                this.xmlQuestions.appendChild(question_set);
                let question = this.xmldom.createElement('question');
                question.setAttribute('name', '总分'); // 可以像在html中一样为元素添加属性
                question.setAttribute('page_num', this.currentPage.toString());
                question.setAttribute('full_score', '10');
                question.setAttribute('type', 'subjective');
                question.setAttribute('sub_type', 'total_score');
                question.setAttribute('qid', this.qid.toString());
                this.qid++;

                let svg = undefined;
                switch (this.currentPage) {
                    case 1 :
                        svg = Snap('#svg');
                        break;
                    case 2 :
                        svg = Snap("#svg1");
                        break;
                    case 3 :
                        svg = Snap('#svg2');
                        break;
                    case 4 :
                        svg = Snap("#svg3");
                        break;
                }
                var perWidth = 0;
                if (this.addBlanksParam.stepScore === 'yes') {
                    perWidth = (19.93 - (2.88 * this.addBlanksParam.size)) / this.addBlanksParam.size;
                } else {
                    perWidth = (19.93 - (1.44 * this.addBlanksParam.size)) / this.addBlanksParam.size;
                }
                var start = this.addBlanksParam.start;
                let preHeight = Math.floor((775 - (this.bottomPX + 10)) / (2.7 * this.baseHeight));
                console.log(preHeight)
                svg.paper.rect(1.67 * this.baseWidth, this.bottomPX + 10, 2.88 * this.baseWidth, 2.7 * this.baseHeight).attr({
                    stroke: '#000',
                    style: 'fill-opacity :0'
                });
                svg.paper.line(3.11 * this.baseWidth, this.bottomPX + 10, 3.11 * this.baseWidth, this.bottomPX + 10 + 2.7 * this.baseHeight).attr({
                    stroke: '#000',
                    strokeWidth: 1
                });
                let score_section = this.xmldom.createElement('score_section');
                score_section.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                score_section.setAttribute('border_type', 'solid_box');
                score_section.setAttribute('digit_num', '2');
                score_section.setAttribute('tl_x', Math.round(this.baseWidth * 1.67 * this.multipleWidth).toString());
                score_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                score_section.setAttribute('br_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                score_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7) * this.multipleHeight).toString());
                question.appendChild(score_section);
                if (this.bottomPX + 10 + (this.addBlanksParam.num * this.baseHeight * 2.7) > 775) {
                    let answer_section = this.xmldom.createElement('answer_section');
                    answer_section.setAttribute('page_num', this.currentPage.toString());
                    answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                    answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                    answer_section.setAttribute('br_x', Math.round(this.baseWidth * 25.25 * this.multipleWidth).toString());
                    answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7 * preHeight) * this.multipleHeight).toString());
                    let answer_section1 = this.xmldom.createElement('answer_section');
                    answer_section1.setAttribute('page_num', (this.currentPage + 1).toString());
                    answer_section1.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                    answer_section1.setAttribute('tl_y', Math.round(130 * this.multipleHeight).toString());
                    answer_section1.setAttribute('br_x', Math.round(this.baseWidth * 25.25 * this.multipleWidth).toString());
                    answer_section1.setAttribute('br_y', Math.round((130 + (this.addBlanksParam.num - preHeight) * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                    question.appendChild(answer_section);
                    question.appendChild(answer_section1);
                    question_set.appendChild(question);
                    if (this.addBlanksParam.stepScore === 'yes') {
                        for (let n = 1; n <= preHeight; n++) {
                            for (let i = 0; i < this.addBlanksParam.size; i++) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', start); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round((5.27 * this.baseWidth + i * (2.88 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (n - 1) * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round((6.71 * this.baseWidth + i * (2.88 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + (n) * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                svg.paper.line(7.43 * this.baseWidth + i * (2.88 + perWidth) * this.baseWidth, this.bottomPX + 10 + 2.7 * this.baseHeight * n, i * (2.88 + perWidth) * this.baseWidth + (7.43 + perWidth) * this.baseWidth, this.bottomPX + 10 + 2.7 * this.baseHeight * n).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                });
                                svg.paper.text(6.89 * this.baseWidth + i * (2.88 + perWidth) * this.baseWidth, this.bottomPX + 10 + 2.7 * this.baseHeight * n, start);
                                start++;
                                svg.paper.rect(5.27 * this.baseWidth + i * (2.88 + perWidth) * this.baseWidth, this.bottomPX + 10 + (n - 1) * 2.7 * this.baseHeight, 1.44 * this.baseWidth, 2.7 * this.baseHeight).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                });
                            }
                        }
                        let svgNext = Snap('#svg' + this.currentPage);
                        for (let k = 1; k <= this.addBlanksParam.num - preHeight; k++) {
                            for (let j = 0; j < this.addBlanksParam.size; j++) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', start); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', (this.currentPage + 1).toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round((5.27 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((130 + (k - 1) * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round((6.71 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((130 + k * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                svgNext.paper.line(7.43 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth, 130 + k * 2.7 * this.baseHeight, j * (2.88 + perWidth) * this.baseWidth + (7.43 + perWidth) * this.baseWidth, 130 + k * 2.7 * this.baseHeight).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                });
                                svgNext.paper.text(6.89 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth, 130 + k * 2.7 * this.baseHeight, start);
                                start++;
                                svgNext.paper.rect(5.27 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth, 130, 1.44 * this.baseWidth, k * 2.7 * this.baseHeight).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                });
                            }
                        }
                    } else {
                        for (let n = 1; n <= preHeight; n++) {
                            for (let i = 0; i < this.addBlanksParam.size; i++) {
                                // let questionStep = this.xmldom.createElement('question');
                                // questionStep.setAttribute('name', start); // 可以像在html中一样为元素添加属性
                                // questionStep.setAttribute('page_num', (this.currentPage+1).toString());
                                // questionStep.setAttribute('full_score', '10');
                                // questionStep.setAttribute('type', 'subjective');
                                // questionStep.setAttribute('sub_type', 'subitem');
                                // questionStep.setAttribute('qid', this.qid.toString());
                                // this.qid++;
                                // let score_section1 = this.xmldom.createElement('score_section');
                                // score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                // score_section1.setAttribute('border_type', 'solid_box');
                                // score_section1.setAttribute('digit_num', '2');
                                // score_section1.setAttribute('tl_x', ((5.27 * this.baseWidth + i * (1.44 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                // score_section1.setAttribute('tl_y', ((this.bottomPX + 10 + (n - 1) * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                                // score_section1.setAttribute('br_x', ((6.71 * this.baseWidth + i * (1.44 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                // score_section1.setAttribute('br_y', ((this.bottomPX + 10 + n * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                                // questionStep.appendChild(score_section1);
                                // question_set.appendChild(questionStep);
                                svg.paper.line(5.81 * this.baseWidth + i * (1.44 + perWidth) * this.baseWidth, this.bottomPX + 10 + 2.7 * this.baseHeight * n, i * (1.44 + perWidth) * this.baseWidth + (5.81 + perWidth) * this.baseWidth, this.bottomPX + 10 + 2.7 * this.baseHeight * n).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                });
                                svg.paper.text(5.27 * this.baseWidth + i * (1.44 + perWidth) * this.baseWidth, this.bottomPX + 10 + 2.7 * this.baseHeight * n, start);
                                start++;
                            }
                        }
                        let svgNext = Snap('#svg' + this.currentPage);
                        for (let k = 1; k <= this.addBlanksParam.num - preHeight; k++) {
                            for (let j = 0; j < this.addBlanksParam.size; j++) {
                                svgNext.paper.line(5.81 * this.baseWidth + j * (1.44 + perWidth) * this.baseWidth, 130 + k * 2.7 * this.baseHeight, j * (1.44 + perWidth) * this.baseWidth + (5.81 + perWidth) * this.baseWidth, 130 + k * 2.7 * this.baseHeight).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                });
                                svgNext.paper.text(5.27 * this.baseWidth + j * (1.44 + perWidth) * this.baseWidth, 130 + k * 2.7 * this.baseHeight, start);
                                start++;
                            }
                        }
                    }
                } else {
                    let answer_section = this.xmldom.createElement('answer_section');
                    answer_section.setAttribute('page_num', this.currentPage.toString());
                    answer_section.setAttribute('tl_x', Math.round(this.baseWidth * 4.55 * this.multipleWidth).toString());
                    answer_section.setAttribute('tl_y', Math.round((this.bottomPX + 10) * this.multipleHeight).toString());
                    answer_section.setAttribute('br_x', Math.round(this.baseWidth * 25.25 * this.multipleWidth).toString());
                    answer_section.setAttribute('br_y', Math.round((this.bottomPX + 10 + this.baseHeight * 2.7 * this.addBlanksParam.num) * this.multipleHeight).toString());
                    question.appendChild(answer_section);
                    question_set.appendChild(question);
                    if (this.addBlanksParam.stepScore === 'yes') {
                        for (let k = 1; k <= this.addBlanksParam.num; k++) {
                            for (let j = 0; j < this.addBlanksParam.size; j++) {
                                let questionStep = this.xmldom.createElement('question');
                                questionStep.setAttribute('name', start); // 可以像在html中一样为元素添加属性
                                questionStep.setAttribute('page_num', this.currentPage.toString());
                                questionStep.setAttribute('full_score', '10');
                                questionStep.setAttribute('type', 'subjective');
                                questionStep.setAttribute('sub_type', 'subitem');
                                questionStep.setAttribute('qid', this.qid.toString());
                                this.qid++;
                                let score_section1 = this.xmldom.createElement('score_section');
                                score_section1.setAttribute('score_type', 'number'); // 可以像在html中一样为元素添加属性
                                score_section1.setAttribute('border_type', 'solid_box');
                                score_section1.setAttribute('digit_num', '1');
                                score_section1.setAttribute('tl_x', Math.round((5.27 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                score_section1.setAttribute('tl_y', Math.round((this.bottomPX + 10 + (k - 1) * 2.7 * this.baseHeight) * this.multipleHeight).toString());
                                score_section1.setAttribute('br_x', Math.round((6.71 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth) * this.multipleWidth).toString());
                                score_section1.setAttribute('br_y', Math.round((this.bottomPX + 10 + k * this.baseHeight) * this.multipleHeight).toString());
                                questionStep.appendChild(score_section1);
                                question_set.appendChild(questionStep);
                                svg.paper.line(7.43 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth, this.bottomPX + 10 + k * 2.7 * this.baseHeight, j * (2.88 + perWidth) * this.baseWidth + (7.43 + perWidth) * this.baseWidth, this.bottomPX + 10 + k * 2.7 * this.baseHeight).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                });
                                svg.paper.text(6.89 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth, this.bottomPX + 10 + k * 2.7 * this.baseHeight, start);
                                start++;

                                svg.paper.rect(5.27 * this.baseWidth + j * (2.88 + perWidth) * this.baseWidth, this.bottomPX + 10, 1.44 * this.baseWidth, k * 2.7 * this.baseHeight).attr({
                                    stroke: '#000',
                                    style: 'fill-opacity :0'
                                });
                            }
                        }
                    } else {
                        for (let k = 1; k <= this.addBlanksParam.num; k++) {
                            for (let j = 0; j < this.addBlanksParam.size; j++) {
                                svg.paper.line(5.81 * this.baseWidth + j * (1.44 + perWidth) * this.baseWidth, this.bottomPX + 10 + k * 2.7 * this.baseHeight, j * (1.44 + perWidth) * this.baseWidth + (5.81 + perWidth) * this.baseWidth, this.bottomPX + 10 + k * 2.7 * this.baseHeight).attr({
                                    stroke: '#000',
                                    strokeWidth: 1
                                });
                                svg.paper.text(5.27 * this.baseWidth + j * (1.44 + perWidth) * this.baseWidth, this.bottomPX + 10 + k * 2.7 * this.baseHeight, start);
                                start++;
                            }
                        }
                    }
                }

                this.bottomPX = this.bottomPX + 10 + this.addBlanksParam.num * this.baseHeight * 2.7;
                if (this.bottomPX > 775 || 10 + this.bottomPX + 2.7 * this.baseHeight > 775) {
                    this.bottomPX = 130 + (this.addBlanksParam.num - preHeight) * this.baseHeight * 2.7;
                    document.getElementById("page" + this.currentPage).style.display = 'block';
                    this.currentPage++;
                }
                this.addBlanks = false
            },
            handleBlankDelete(row, index) {
                this.blanks.splice(index, 1)
            },
            handleSubjectEdit(index, row) {
                this.currentSubjectIndex = index
                this.currentSubject = row
                this.copySubject = this.deepClone(row)
                this.editSubjective = true
            },
            toEditSubject() {
                this.currentSubject.size = this.copySubject.size
                this.currentSubject.name = this.copySubject.name
                this.currentSubject.fill = this.copySubject.fill
                this.currentSubject.position = this.copySubject.position
                this.currentSubject.point = this.copySubject.point
                this.editSubjective = false
            },
            toDelete() {
                this.subjective.splice(this.currentSubjectIndex, 1);
                this.rectSubjective[this.currentSubjectIndex].remove();
                this.rectSubjectiveScore[this.currentSubjectIndex].remove();
                this.lineSubjectiveScore[this.currentSubjectIndex].remove();
                this.rectSubjectiveStepScore[this.currentSubjectIndex].remove();
                for (let i = 0; i < this.lineSubjectiveStepScore[this.currentSubjectIndex].length; i++) {
                    this.lineSubjectiveStepScore[this.currentSubjectIndex][i].remove();
                }

                let loseHight = this.rectSubjective[this.currentSubjectIndex].node.y.animVal.value;

                // for (let i = this.currentSubjectIndex + 1; i < this.subjective.length; i++) {
                //   this.rectSubjective[i].attr({
                //     y: this.rectSubjective[i].node.y.animVal.value-loseHight
                //   });
                //   this.rectSubjectiveScore[i].attr({
                //     y: this.rectSubjectiveScore[i].node.y.animVal.value-loseHight
                //   });
                //   console.log(this.lineSubjectiveScore[i])
                //   // this.lineSubjectiveScore[i].attr({
                //   //   y: this.lineSubjectiveScore[i].node.y.animVal.value-loseHight
                //   // });
                // }


                this.rectSubjective.splice(this.currentSubjectIndex, 1);
                this.rectSubjectiveScore.splice(this.currentSubjectIndex, 1);
                this.lineSubjectiveScore.splice(this.currentSubjectIndex, 1);
                this.lineSubjectiveStepScore.splice(this.currentSubjectIndex, 1);
                this.rectSubjectiveStepScore.splice(this.currentSubjectIndex, 1);

                this.isDelete = false;
                this.editSubjective = false;
            },
            handleObjectDeleteAll() {
                this.deleteObjectAll = true
            },
            toDeleteObjectAll() {
                this.objective.splice(this.objectDeleteStart - 1, parseInt(this.objectDeleteEnd) - parseInt(this.objectDeleteStart) + 1)
                this.deleteObjectAll = false
            },
            handleDeleteSingleObject(index) {
                this.objective.splice(index, 1)
            },
            handleClose() {

            },
            closeDialog() {

            },
            deepClone(obj) {
                var newObj = obj.constructor === Array ? [] : {}
                if (typeof obj !== 'object') {
                    return
                } else {
                    for (var i in obj) {
                        newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
                    }
                }
                return newObj
            },
            handleDownPdf() {

            },
            /*画试卷*/
            drawSheet() {

            },
            /*画线*/
            drawLine(x1, y1, x2, y2, svg) {
                svg.paper.line(x1, y1, x2, y2).attr({
                    stroke: '#000',
                    strokeWidth: 1
                })
            },
            drawRect(x1, y1, width, height, svg) {
                svg.paper.rect(x1, y1, width, height).attr({
                    stroke: '#000',
                    style: 'fill-opacity :0'
                })
            },
            drawFilledRect(x1, y1, width, height, svg) {
                svg.paper.rect(x1, y1, width, height).attr({
                    stroke: '#000',
                    fill: '#000',
                })
            },
            drawFilledWhiteRect(x1, y1, width, height, svg) {
                svg.paper.rect(x1, y1, width, height).attr({
                    stroke: '#fff',
                    fill: '#fff',
                })
            },
            /*当题目变化时 进行的*/
            handleSheetChange() {
                this.drawSheet();
            },
            requestUrl() {
                console.log("request");
                // this.addForm.filesName = this.fileNames.toString()
                templateAdd(this.addForm).then(response => {
                    this.urls = response.data;
                    this.$router.push('/template/show')
                })
            },
            upload() {
                let x = this.currentPage;
                var uploadNum = 0;
                var that = this;
                var serializer = new XMLSerializer();
                var xml = serializer.serializeToString(this.xmldom);
                that.addForm.xmlContent = '<?xml version="1.0" encoding="UTF-8"?>' + xml;
                for (let i = 0; i < this.currentPage; i++) {
                    let page = '#page' + i;
                    // html2Canvas(document.querySelector(page), {
                    //   width: 592,
                    //   height: 837,
                    //   allowTaint: true,
                    //   scale: 10
                    // }).then(function (canvas) {
                    //     let pageData = canvas.toDataURL('image/jpeg', 1.0);
                    //     function dataURLtoBlob(dataurl) {
                    //       var arr = dataurl.split(','),
                    //         mime = arr[0].match(/:(.*?);/)[1],
                    //         bstr = atob(arr[1]),
                    //         n = bstr.length,
                    //         u8arr = new Uint8Array(n);
                    //       while (n--) {
                    //         u8arr[n] = bstr.charCodeAt(n);
                    //       }
                    //       return new Blob([u8arr], {type: mime});
                    //     }
                    //
                    //     const vthis = this;
                    //     var client = new OSS({
                    //       region: "oss-cn-zhangjiakou.aliyuncs.com",
                    //       endpoint: 'oss-cn-zhangjiakou.aliyuncs.com',
                    //       accessKeyId: "LTAIBQQtw9GvFpht",
                    //       accessKeySecret: "bUyrKLwBWsLv3SkUYMj4OcNoC3WtZq",
                    //       bucket: "panguan-standard"
                    //     });
                    //     console.log(that+'212121')
                    //     client.put("/template/cscscsxs" + i + ".jpg", dataURLtoBlob(pageData), {
                    //       progress: function* (percentage, cpt) {
                    //         vthis.percentage = percentage
                    //       }
                    //     }).then((results) => {
                    //       uploadNum++;
                    //       that.addForm.urls.push(results.url);
                    //       console.log(that.addForm.urls);
                    //       if (uploadNum > x) {
                    //         that.addForm.urls=that.addForm.urls.toString()
                    //         that.requestUrl()
                    //       }
                    //     }).catch((err) => {
                    //     });
                    //   }
                    // );
                    html2Canvas(document.querySelector(page), {
                        width: 592,
                        height: 837,
                        allowTaint: true,
                        scale: 10
                    }).then(function (canvas) {
                            let pageData = canvas.toDataURL('image/jpeg', 1.0);

                            function dataURLtoBlob(dataurl) {
                                var arr = dataurl.split(','),
                                    mime = arr[0].match(/:(.*?);/)[1],
                                    bstr = atob(arr[1]),
                                    n = bstr.length,
                                    u8arr = new Uint8Array(n);
                                while (n--) {
                                    u8arr[n] = bstr.charCodeAt(n);
                                }
                                return new Blob([u8arr], {type: mime});
                            }

                            const vthis = this;
                            var client = new OSS({
                                region: "oss-cn-zhangjiakou.aliyuncs.com",
                                endpoint: 'oss-cn-zhangjiakou.aliyuncs.com',
                                accessKeyId: "LTAIBQQtw9GvFpht",
                                accessKeySecret: "bUyrKLwBWsLv3SkUYMj4OcNoC3WtZq",
                                bucket: "panguan-standard"
                            });
                            console.log(that + '212121')
                            client.put("/template/kkkkkkkkkk" + i + ".jpg", dataURLtoBlob(pageData), {
                                progress: function* (percentage, cpt) {
                                    vthis.percentage = percentage
                                }
                            }).then((results) => {
                                uploadNum++;
                                that.addForm.urls.push(results.url);
                                console.log(that.addForm.urls);
                                if (uploadNum > x) {
                                    that.addForm.urls = that.addForm.urls.toString()
                                    that.requestUrl()
                                }
                            }).catch((err) => {
                            });
                        }
                    );
                }
                html2Canvas(document.querySelector('#pdfDom'), {
                    width: 589,
                    allowTaint: true,
                    scale: 10
                }).then(function (canvas) {
                        let contentWidth = canvas.width;
                        let contentHeight = canvas.height;
                        let pageHeight = contentWidth / 592 * 837;
                        let leftHeight = contentHeight;
                        let position = 0;
                        let imgWidth = 592;
                        let imgHeight = 592 / contentWidth * contentHeight;

                        let pageData = canvas.toDataURL('image/jpeg', 1.0);
                        let PDF = new JsPDF('', 'pt', 'a4');
                        if (leftHeight < pageHeight) {
                            PDF.addImage(pageData, 'JPEG', 0, 0, 592, 837)
                        } else {
                            while (leftHeight > 0) {
                                console.log('imgheight' + imgHeight)
                                PDF.addImage(pageData, 'JPEG', 0, position, 592, 837 * x);
                                leftHeight -= pageHeight;
                                position -= 837;
                                if (leftHeight > 0) {
                                    PDF.addPage()
                                }
                            }
                        }
                        const vthis = this;
                        var client = new OSS({
                            region: "oss-cn-zhangjiakou.aliyuncs.com",
                            endpoint: 'oss-cn-zhangjiakou.aliyuncs.com',
                            accessKeyId: "LTAIBQQtw9GvFpht",
                            accessKeySecret: "bUyrKLwBWsLv3SkUYMj4OcNoC3WtZq",
                            bucket: "panguan-standard"
                        });
                        client.put("/template/kkkkkkkkkk.pdf", PDF.output("blob"), {
                            progress: function* (percentage, cpt) {
                                vthis.percentage = percentage
                            }
                        }).then((results) => {
                            that.addForm.urls.push(results.url);
                            console.log(that.addForm.urls);
                            uploadNum++;
                            if (uploadNum > x) {
                                that.addForm.urls = that.addForm.urls.toString()
                                that.requestUrl()
                            }
                        }).catch((err) => {
                        });
                    }
                );
            }
        }
    }
</script>
<style scoped="true">
    @import "../../style/css/spinners.css";

    .title {
        font-size: 20px;
        line-height: 30px;
        font-weight: 500;
        background: #f7f7f7;
    }
</style>
