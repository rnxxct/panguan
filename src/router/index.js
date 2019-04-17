import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import LoginNew from '../views/LoginNew.vue'
import ResetPassword from '../views/resetPassword.vue'
import Register from '../views/Register.vue'
import Personally from '../views/personally/Personally.vue'
import Test from '../views/Test.vue'
import Subject from '../views/subject/Subject.vue'
import Layout from '../views/layout/Layout.vue'
import Agent from '../views/TeachingAffairManagement/Agent.vue'
import Class from '../views/TeachingAffairManagement/Class.vue'
import School from '../views/TeachingAffairManagement/school.vue'
import ClassOfSchool from '../views/TeachingAffairManagement/ClassOfSchool.vue'
import Teacher from '../views/TeachingAffairManagement/Teacher.vue'
import TeacherOfSchool from '../views/TeachingAffairManagement/TeacherOfSchool.vue'
import Student from '../views/TeachingAffairManagement/Student.vue'
import StudentOfClass from '../views/TeachingAffairManagement/StudentOfClass.vue'
import StudentOfSchool from '../views/TeachingAffairManagement/StudentOfSchool.vue'
import KnowledgePoint from '../views/subject/Knowledgepoint.vue'
import KnowlegdeOfSubject from '../views/subject/KnowledgeOfSubject.vue'
import ScoreAnalysis from '../views/scoreAnalysis/ScoreAnalysis.vue'
import ScoreAnalysisOfTest from '../views/scoreAnalysis/ScoreAnalysisOfTest.vue'
import ScoreAnalysisChoose from '../views/scoreAnalysis/ScoreAnalysisChoose.vue'
import ScoreAnalysisOfTestMore from '../views/scoreAnalysis/ScoreAnalysisOfTestMore.vue'
import ClassesComparison from '../views/scoreAnalysis/ClassesComparison.vue'
import Statistics from '../views/scoreAnalysis/Statistics.vue'
import ScanResult from '../views/scan/ScanResult.vue'
import ScanOfExam from '../views/scan/scanOfExam.vue'
import ScanLast from '../views/scan/scanLast.vue'
import ScanChoose from '../views/scan/scanChoose.vue'
import ScanNew from '../views/scan/scanNew.vue'
import Template from '../views/template/Template.vue'
import TemplateAdd from '../views/template/TemplateAdd.vue'
import TemplateEdit from '../views/template/TemplateEdit.vue'
import Exam from '../views/exam/exam.vue'
import ExamList from '../views/exam/ExamList.vue'
import CreateExam from '../views/exam/CreateExam.vue'
import EditExam from '../views/exam/EditExam.vue'
import ExamGroupToPrint from '../views/exam/examGroupToPrint.vue'
import ExamAnylisisToPrint from '../views/exam/ExamAnalysisToPrint.vue'
import ClassesAverageToPrint from '../views/exam/classAverage.vue'
import ExamQuotaToPrint from '../views/exam/examQuotaToPrint.vue'
import ExamGroup from '../views/exam/ExamGroup.vue'
import ExamGroup2 from '../views/exam/ExamGroup2.vue'
import Proof from '../views/proof/Proof.vue'
import ProofPersonal from '../views/proof/ProofPersonal.vue'
import ExamListForProof from '../views/proof/ExamListForProof.vue'
import ProofSheet from '../views/proof/ProoSheet.vue'
import Canvas from '../views/exam/Canvas.vue'
import ExamToPrint from '../views/scoreAnalysis/examToPrint.vue'
import District from '../views/TeachingAffairManagement/district.vue'
import MakeTemplate from '../views/makeTemplate/MakeTemplate.vue'
import KnowledgeStatistics from '../views/scoreAnalysis/KnowledgeStatistics.vue'
import ProofTwice from "../views/proof/ProofTwice";
import Download from "../views/Download";
import subjectRanking from "../views/exam/subjectRanking";
import DiffAndDif from "../views/scoreAnalysis/DiffAndDif";
import BreakdownTable from "../views/exam/BreakdownTable";
import BreakdownTemplate from "../views/exam/BreakdownTemplate";
import BreakdownTableChoose from "../views/exam/BreakdownTableChoose";
import BreakdownTableChooseEdit from "../views/exam/BreakdownTableChooseEdit";
import BreakdownCreateExam from "../views/exam/BreakdownCreateExam";
import Home from "../views/Home";
import ScoreVerticalAnalysis from "../views/scoreAnalysis/ScoreVerticalAnalysis";

Vue.use(Router)
const routes = [
    {
        path: '/',
        name: '登录',
        component: LoginNew
    },
    {
        path: '/home',
        name: '首页',
        component: Home
    },
    {
        path: '/download',
        name: '下载',
        component: Download
    },
    {
        path: '/loginNew',
        name: '登陆新页面',
        component: LoginNew
    },
    {
        path: '/resetPassword',
        name: '重置密码',
        component: ResetPassword
    },
    {
        path: '/register',
        name: '注册页面',
        component: Register
    },
    {
        path: '/makeTemplate',
        name: '制作模板',
        component: Layout,
        children: [
            {
                path: '',
                name: "makeTemplate",
                component: MakeTemplate
            }
        ]
    },
    {
        path: '/home',
        name: '课程',
        component: Layout,
        children: [
            {
                path: 'personally',
                name: '个人中心',
                component: Personally
            }
        ]
    },
    {
        path: '/Test',
        name: '测试',
        component: Test
    },
    {
        path: '/subject',
        name: '课程',
        component: Layout,
        children: [
            {
                path: 'subject',
                name: '课程管理',
                component: Subject
            }, {
                path: 'knowledgePoint',
                name: '知识点管理',
                component: KnowledgePoint
            }, {
                path: 'knowledgeOfSubject/:subjectID(\\d+)',
                name: '学科知识点',
                component: KnowlegdeOfSubject
            },
        ]
    },
    {
        path: '/teachingAffair',
        name: '教务',
        component: Layout,
        children: [
            {
                path: 'agent',
                name: '代理商管理',
                component: Agent
            },
            {
                path: 'school',
                name: '学校',
                component: School
            },
            {
                path: 'class',
                name: '班级管理',
                component: Class
            },
            {
                path: 'classOfSchool/:schoolID(\\d+)',
                name: '班级',
                component: ClassOfSchool
            },
            {
                path: 'teacher',
                name: '教师管理',
                component: Teacher
            }, {
                path: 'teacherOfSchool/:schoolID(\\d+)',
                name: '教师',
                component: TeacherOfSchool
            }, {
                path: 'student',
                name: "学生管理",
                component: Student
            }, {
                path: 'studentOfSchool/:schoolID(\\d+)',
                name: "学生",
                component: StudentOfSchool
            }, {
                path: 'studentOfClass',
                name: "班级学生",
                component: StudentOfClass
            },
            {
                path: 'district',
                name: '地区管理',
                component: District
            }
        ]
    },
    {
        path: '/scoreAnalysis',
        name: "成绩报表",
        component: Layout,
        children: [
            {
                path: 'tests',
                name: "考试成绩",
                component: ScoreAnalysis
            },
            {
                path: 'diffAndDif',
                name: "试题分析",
                component: DiffAndDif
            },
            {
                path: 'test',
                name: '测试',
                component: ScoreAnalysisOfTest
            }, {
                path: 'tests/Choose',
                name: '选择报表类型',
                component: ScoreAnalysisChoose
            }, {
                path: 'tests/vertical',
                name: '选择报表类型',
                component: ScoreVerticalAnalysis
            }, {
                path: 'tests/more',
                name: '更多测试',
                component: ScoreAnalysisOfTestMore
            }
            , {
                path: 'classesComparison/:testID(\\d+)',
                name: '班级对比',
                component: ClassesComparison
            }, {
                path: 'statistics',
                name: '单题统计',
                component: Statistics
            },
            {
                path: 'knowledgeStatistics',
                name: '知识点统计',
                component: KnowledgeStatistics
            }
        ]
    },
    {
        path: '/scoreAnalysis',
        name: "成绩报表",
        component: Layout,
        children: []
    },
    {
        path: '/template',
        name: '模板管理',
        component: Layout,
        children: [
            {
                path: 'show',
                name: '模板',
                component: Template
            },
            {
                path: 'add',
                name: '添加模板',
                component: TemplateAdd
            },
            {
                path: 'update/:templateID(\\d+)',
                name: '修改模板',
                component: TemplateEdit
            }
        ]
    },
    {
        path: '/exam',
        name: '考试管理',
        component: Layout,
        children: [
            {
                path: '',
                name: '模板',
                component: Exam
            },
            {
                path: 'breakdown',
                name: '细目表',
                component: BreakdownTable
            },
            {
                path: 'breakdown/template',
                name: '细目表模板',
                component: BreakdownTemplate
            },
            {
                path: 'breakdown/choose',
                name: '细目表选择',
                component: BreakdownTableChoose
            },
            {
                path: 'breakdown/edit',
                name: '细目表修改',
                component: BreakdownTableChooseEdit
            },
            {
                path: 'breakdown/create/exam',
                name: '细目表创建考试',
                component: BreakdownCreateExam
            },
            {
                path: 'list',
                name: '考试列表',
                component: ExamList
            },
            {
                path: 'create',
                name: '创建考试',
                component: CreateExam
            },
            {
                path: 'edit',
                name: '修改考试',
                component: EditExam
            },
            {
                path: 'canvas',
                name: '点击选答案',
                component: Canvas
            },
            {
                path: 'examGroup',
                name: '多科考试',
                component: ExamGroup2
            },
            {
                path: 'examGroupToPrint',
                name: '打印综合考试',
                component: ExamGroupToPrint
            },
            {
                path: 'examAnalysisToPrint',
                name: '打印综合考试分析',
                component: ExamAnylisisToPrint
            },
            {
                path: 'subjectRanking',
                name: '新打印综合考试分析',
                component: subjectRanking
            },
            {
                path: 'quotaToPrint',
                name: '打印指标分析',
                component: ExamQuotaToPrint
            }, {
                path: 'classes/average',
                name: '班级平均分',
                component: ClassesAverageToPrint
            }
        ]
    },
    {
        path: '/proof',
        name: '校对',
        component: Layout,
        children: [
            {
                path: 'examForProof',
                name: '试卷校对',
                component: ExamListForProof
            }
            ,
            {
                path: 'proof/:testID(\\d+)',
                name: '试卷校对测试',
                component: Proof
            },
            {
                path: 'proofTwice/:testID(\\d+)',
                name: '试卷二次校对测试',
                component: ProofTwice
            },
            {
                path: 'proofSheet/:testID(\\d+)',
                name: '整张校对',
                component: ProofSheet
            }, {
                path: 'proofSheet/personal',
                name: '个人试卷校对',
                component: ProofPersonal
            }
        ]
    },
    {
        path: '/scan',
        name: '扫描',
        component: Layout,
        children: [
            {
                path: 'scan',
                name: '扫描',
                component: ScanOfExam
            },
            {
                path: 'scanResult',
                name: '扫描结果',
                component: ScanResult
            },
            {
                path: 'scanLast',
                name: '扫描剩余',
                component: ScanLast
            },
            {
                path: 'scanChoose',
                name: '扫描选择',
                component: ScanChoose
            }/*,{
        path:'scanNew',
        name:'新扫描',
        component:ScanNew
      }*/
        ]
    },
    {
        path: '/examToPrint',
        name: '打印',
        component: ExamToPrint
    }
]
export default new Router({
    /*
     mode:'history',
     */
    base: '/panguan',
    routes: routes,
})
