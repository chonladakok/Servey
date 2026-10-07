// ---------------------------------------------------------
// ส่วนที่ 1: การตั้งค่าข้อมูล (แก้ไขข้อมูลของคุณที่นี่)
// ---------------------------------------------------------

const surveyConfig = {
    // 1. รายชื่อนักศึกษาทั้งหมดในรายวิชา
    students: [
        "6801101001 นางสาว กชพร ทองมลีวรรณ",
        "6801101002 นาย กมลภพ อภิพรสกุล",
        "6801101003 นางสาว กร สาลีวรรณ",
        "6801101004 นางสาว กรณัฏฐ์ ปิยพงศ์ไพบูลย์",
        "6801101005 นางสาว กรพินธุ์ ศรีศศินานนท์",
        "6801101006 นาย กฤษณ์ บูรสุขสวัสดิ์",
        "6801101007 นาย กษิดิ์เดช เกียรติเจริญสุข",
        "6801101008 นาย กันตพงศ์ ไพศาสตร์",
	"6801101009 นางสาว ขวัญหทัย สุชาติล้ำพงศ์",
	"6801101010 นางสาว คัคณาง ศรีสมบัติ",
	"6801101011 นาย จักรเพชร ไชยวรรณ",
	"6801101012 นาย ชัจจ์ศวัส อยู่สถาพร",
	"6801101013 นาย ชานน แก้วกันยา",
	"6801101014 นางสาว ชิสา กล่ำศิริ",
	"6801101015 นาย ณพวิทย์ มุทธาประพฤทธิ์",
	"6801101016 นางสาว ณภัทร เมฆเกรียงไกร",
	"6801101017 นางสาว ณหทัย อัศวุตมางกุร",
	"6801101018 นางสาว ณัฏฐณิชชา ทองส่ง",
	"6801101019	นางสาว	ณัฐชยา	จันทร์ดี",
"6801101020 นางสาว ณัฐธิดา บุญคุ้ม",
"6801101021 นาย	ณัฐนันท์ ตรังพาณิชย์",
"6801101022 นางสาว ณิฐานันต์ จักเดชไชย",
"6801101023 นาย	ธนกร อึ้งเจริญทรัพย์",
"6801101024 นาย	ธนกฤต เลิศประกิต",
"6801101025 นาย	ธนธฤต หิรัญกิจ",
"6801101026 นาย	ธนิษฐ์ พิมพิศประภานัน",
"6801101027 นางสาว ธัญญพรรษ สกุลวิสิฏฐ์",
"6801101028 นางสาว นภัทร เฮงเลี้ยง",
"6801101029 นาย นรัตน์ จันทร์ช่วง",
"6801101031 นางสาว นารีรัตน์ แซ่ย่าง",
"6801101032 นางสาว บุญญาดา งามสิริมาศ",
"6801101033 นางสาว บุญยวีร์	 ประสิทธิ์วิภาต",
"6801101034 นางสาว เบญญาภา โลแก้ว",
"6801101035 นาย	ปณภัทร ประดุจพรม",
"6801101036 นางสาว ปราณิสา บุญณัทนันท์",
"6801101037 นาย	ปฤณ สุคันธปรีย์",
"6801101038 นาย	ปวรุตม์ เอกพิศุทธิ์สุนทร",
"6801101039 นางสาว ปสุตา อุบลสถิตย์",
"6801101040 นาย	ปัญจสุทธิ์	ตั้งปัญญาพินิจ",
"6801101041 นาย	ปัณณ์ ชัชชัยวรกฤศ",
"6801101042 นาย	ปัณณพงศ์	กีรติอนันต์พร",
"6801101043 นางสาว ปานชีวา ประสงค์",
"6801101044 นางสาว ปาลิตา	ชาญนุวงศ์",
"6801101045 นางสาว ปิ่นวีนัส	 ปันแก้ว",
"6801101046 นาย ปิยังกูร ชูมณี",
"6801101047 นางสาว พรปวีณ์ สุนสะธรรม",
"6801101048 นางสาว พรรณณิชชา จารุกิจขจร",
"6801101049 นางสาว พรลาภิณ สวัสดิบุตร",
"6801101050 นาย	พัทธดนย์ งามเนรมิตดี",
"6801101051 นาย พิธิวัฒน์ ซุ่นหมี",
"6801101052 นางสาว พิรญาณ์ ศุภกิจวณิชกุล",
"6801101053 นาย	พีรพัฒน์ กันธุระ",
"6801101054 นางสาว ภัทรณิตฌฐ์ มีผดุง",
"6801101055 นาย	ภัทรดร ธุถาวร",
"6801101056 นาย	ภัทรพล สุวสุนทรีย์",
"6801101057 นางสาว ภัทรภร รัตแพทย์",
"6801101058 นาย	ภาวิช ยาสุวรรณ",
"6801101059 นาย	ภูริณัฐ วิชาโคตร",
"6801101060 นางสาว ภูษนิศา ด้วงมั่ง",
"6801101061 นาย มนัสวิน แสงทองสุก",
"6801101062 นางสาว มัชฌิมา พงศ์พฤกษา",
"6801101063 นางสาว มุทิตา เกตุแก้ว",
"6801101064 นางสาว มูลิญญา ดีนนุ้ย",
"6801101065 นาย ยศพล หัสชู",
"6801101066 นางสาว รดา มกรพันธ์",
"6801101067 นางสาว รดาณัฐ 	สืบสิน",
"6801101068 นาย	รัชพล เลาห์ประเสริฐสิทธิ์",
"6801101069 นาย	รุจิภาส เหล่าแก้ว",
"6801101070 นาย วรพล	 ตันติสุวรรณนา",
"6801101071 นาย	วีร์ทิวัตถ์ ศิริวัฒนากร",
"6801101072 นาย	สิรวิชญ์ จงเสถียร",
"6801101073 นาย	สิรวิชญ์ พันธุ์ศรีเพชร",
"6801101074 นางสาว สุชญา	พันธุระศรี",
"6801101075 นาย เสฏฐพันธ์ ศรีพานิชกิจ",
"6801101076 นาย	อดิศร วงศ์ประณุฑ",
"6801101077 นางสาว อภิชญา งามเกษมทรัพย์",
"6801101078 นางสาว อรนลิน ธนพงศ์พิพัฒน์",
"6801101079 นางสาว อัยริสา เปรุนาวิน",
"6801101080 นางสาว อุรชา	อัชชโคสิต",
"6801101081 นาย	กัณฑาภัทร วรฉัตร",
"6801101082 นาย	จิรวัฒน์ อมรโอภาสเสถียร",
"6801101083 นาย	จิรายุ นาคสุทธิ์",
"6801101084 นางสาว ณัฐชา ผลเจริญ",
"6801101085 นาย	ธนัช หวังอุดม",
"6801101086 นาย	นิติธร จิรกิตตยากร",
"6801101087 นางสาว ปาณิสรา บัวแก้ว",
"6801101088 นาย พิชญุตม์ มีมงคล",
"6801101089 นางสาว พิมพ์พันธุ์ ฐิรโฆไท",
"6801101090 นาย ภัชชกร สุวรรณแสง โมไนยพงศ์",
"6801101091 นางสาว มทินา อินทะศิริสกุล",
"6801101092 นางสาว มนัสนันท์ บวรพิพัฒน์กุล",
"6801101093 นาย	รัตนชัย นากพ่วง",
"6801101094 นาย	วชิรวิทย์ อุษาคณารักษ์",
"6801101095 นาย	วัชรวินทุ์ ฉายะวาณิชย์",
"6801101096 นาย	ศุภเชฏฐ์ อิงคกุล",
"6801101097 นาย	สรศักดิ์ คชเกตุ",
"6801101098 นาย	สรสิช	 คิดละเอียด",
"6801101099 นางสาว สลิล ภาคสุวรรณ",
"6801101100 นางสาว อชิรญา ปรัชญาวรากร"

    ],

    // 2. หัวข้อการสอน (จัดกลุ่มตามหัวข้อ และระบุชื่อผู้สอนด้านใน)
    topics: [
        { 
            id: "t1", 
            title: "Lec.1 Organ structure and function", 
            date: "4 พ.ย. 2569", 
            time: "10:00 - 12:00", 
            teachers: ["ผศ.ดร.เบญจมาศ ประทุมไทย"] 
        },
        { 
            id: "t2", 
            title: "Lec.2 Organ structure and function", 
            date: "4 พ.ย. 2569", 
            time: "13:00 - 15:00", 
            teachers: ["ผศ.ดร.สิริลักษณ์ มาเกิด"] 
        },
        { 
            id: "t3", 
            title: "Lec.3 Embryology of skin", 
            date: "5 พ.ย. 2569", 
            time: "09:00 - 10:00", 
            teachers: ["ผศ.ดร.ถิรวัสส์ พุ่มอยู่"] 
        },
        { 
            id: "t4", 
            title: "Lec.4 Barrier function, body Temperature and sensory control (Pain, itching)", 
            date: "5 พ.ย. 2569", 
            time: "10:00 - 12:00", 
            teachers: ["อ.ดร.จุฑามาศ วันเพ็ชร"]
 	},
        { 
            id: "t5", 
            title: "Lec.5 Skin infection (Bacteria) including Lab investigation", 
            date: "9 พ.ย. 2569", 
            time: "10:00 - 11:00", 
            teachers: ["รศ.ดร.ศิริพรรณ บุญศิลป์"]
	},
        { 
            id: "t6", 
            title: "Lec.6 Skin infection (Fungus) including Lab investigation", 
            date: "9 พ.ย. 2569", 
            time: "11:00 - 12:00", 
            teachers: ["รศ.ดร.ศิริพรรณ บุญศิลป์"]
	},
        { 
            id: "t7", 
            title: "Lec.7 Skin infection (Virus)", 
            date: "11 พ.ย. 2569", 
            time: "10:00 - 12:00", 
            teachers: ["อ.ดร.สพญ.ชญานี เศรษฐปราโมทย์"]
	},
        { 
            id: "t8", 
            title: "Lec.8 Skin infection (Parasite) including Lab investigation", 
            date: "11 พ.ย. 2569", 
            time: "13:00 - 15:00", 
            teachers: ["ผศ.ดร.อิทธิศักดิ์ ทรัพย์รุ่งเรือง","ผศ.ดร.นิธิกุล อักษร","ผศ.ดร.ลักขณาวัลย์ เจริญสุข"]
	},
        { 
            id: "t9", 
            title: "Lec.9 Autoimmune bullous diseases and connective tissue diseases", 
            date: "13 พ.ย. 2569", 
            time: "10:00 - 11:00", 
            teachers: ["ผศ.สุจิโรตถ์ หาญทวิชัย"]
	},
        { 
            id: "t10", 
            title: "Lec.10 Basic skin examination Approach to Dermatologic conditions", 
            date: "13 พ.ย. 2569", 
            time: "11:00 - 12:00", 
            teachers: ["ผศ.สุจิโรตถ์ หาญทวิชัย"]
	},
        { 
            id: "t11", 
            title: "Lec.11 Changes associated with stage of life (Childhood-Adulthood Pregnancy-Senile)", 
            date: "16 พ.ย. 2569", 
            time: "09:00 - 11:00", 
            teachers: ["อ.นพ.ปรมินทร์ ปัทมาลัย","ผศ.วีณา ภู่ทองคํา","รศ.วรรณจรัส รุ่งพิสุทธิพงษ์"]
	},
        { 
            id: "t12", 
            title: "Lec.12 Eczema and papulosquamous diseases", 
            date: "16 พ.ย. 2569", 
            time: "11:00 - 12:00", 
            teachers: ["รศ.วรรณจรัส รุ่งพิสุทธิพงษ์"]
	},
        { 
            id: "t13", 
            title: "Lec.13 Erythema multiforme / Steven Johnsons syndrome / TENs", 
            date: "16 พ.ย. 2569", 
            time: "13:00 - 14:00", 
            teachers: ["รศ.วรรณจรัส รุ่งพิสุทธิพงษ์","ผศ.วีณา ภู่ทองคํา","อ.นพ.ปรมินทร์ ปัทมาลัย"]
	},
        { 
            id: "t14", 
            title: "Lec.14 Urbanology of skin", 
            date: "16 พ.ย. 2569", 
            time: "14:00 - 16:00", 
            teachers: ["รศ.วรรณจรัส รุ่งพิสุทธิพงษ์","ผศ.วีณา ภู่ทองคํา","อ.นพ.ปรมินทร์ ปัทมาลัย"]
	},
        { 
            id: "t15", 
            title: "Lec.15 Urticaria and angioedema", 
            date: "17 พ.ย. 2569", 
            time: "08:00 - 09:00", 
            teachers: ["รศ.วรรณจรัส รุ่งพิสุทธิพงษ์","ผศ.วีณา ภู่ทองคํา","อ.นพ.ปรมินทร์ ปัทมาลัย"]
	},
        { 
            id: "t16", 
            title: "Lec.16 Pathology tumors of skin", 
            date: "17 พ.ย. 2569", 
            time: "09:00 - 10:00", 
            teachers: ["อ.ทิน ฤกษ์ชูชิต"]
	},
        { 
            id: "t17", 
            title: "Lec.17 Phamacological treatment and skin disorders", 
            date: "17 พ.ย. 2569", 
            time: "13:00 - 15:00", 
            teachers: ["อ.นพ.ปรมินทร์ ปัทมาลัย","รศ.วรรณจรัส รุ่งพิสุทธิพงษ์"]
	},
        { 
            id: "t18", 
            title: "Lec.18 Non-neoplastic Skin disorders (corn, scar, keloid, dyshidrosis, miliaria, freckles, melasma, vitiligo, etc.)", 
            date: "19 พ.ย. 2569", 
            time: "09:00 - 11:00", 
            teachers: ["รศ.เมธาวี บุญศิริ","ผศ.สุจิโรตถ์ หาญทวิชัย"]
	},
        { 
            id: "t19", 
            title: "Lec.19 Symptoms of skin Infection", 
            date: "19 พ.ย. 2569", 
            time: "11:00 - 12:00", 
            teachers: ["อ.นพ.ปรมินทร์ ปัทมาลัย","รศ.เมธาวี บุญศิริ"]
	},
        { 
            id: "t20", 
            title: "Lec.20 Wound ulcer and burn: Repair and Regeneration of skin and connective tissue", 
            date: "20 พ.ย. 2569", 
            time: "10:00 - 12:00", 
            teachers: ["ผศ.พรเทพ สิริมหาไชยกุล","ผศ.พญ.นภาพร ภูริพัฒน์"]
	}
        


    ]
};

// นำ URL ที่ได้จากการ Deploy Google Apps Script มาใส่ในเครื่องหมายคำพูดด้านล่าง
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwvBvxtctF5aokMOK0OBZeMmXsh-P3w0GAkR9VpdxjLGZL_xJR0Avs8doMpYlW2UVlR/exec"; 

// ---------------------------------------------------------
// ส่วนที่ 2: ระบบการทำงานของแบบสำรวจ (ไม่ต้องแก้ไข)
// ---------------------------------------------------------

let currentProfName = null;
let currentProfTopics = [];

// สกัดรายชื่ออาจารย์ทั้งหมดออกมาโดยไม่ซ้ำกัน เพื่อทำ Auto-complete
const allTeachers = [...new Set(surveyConfig.topics.flatMap(t => t.teachers))];

// ---------------------------------------------------------
// การจัดการหน้าแบบสำรวจ (Step-by-step)
// ---------------------------------------------------------

function validateStep(stepId) {
    const stepElement = document.getElementById(stepId);
    if (!stepElement) return true;
    
    const requiredInputs = stepElement.querySelectorAll('input[required]');
    let isValid = true;
    
    const radioGroups = {};
    requiredInputs.forEach(input => {
        if (input.type === 'radio') {
            if (!radioGroups[input.name]) radioGroups[input.name] = [];
            radioGroups[input.name].push(input);
        } else if (input.type === 'checkbox') {
            if (!input.checked) isValid = false;
        } else {
            if (!input.value.trim()) isValid = false;
        }
    });

    for (const groupName in radioGroups) {
        const checked = radioGroups[groupName].some(radio => radio.checked);
        if (!checked) isValid = false;
    }

    if (!isValid) {
        alert("กรุณาตอบคำถามในหน้านี้ให้ครบถ้วนก่อนไปหน้าถัดไปครับ");
    }
    return isValid;
}

function nextStep(nextStepNum) {
    const currentStepNum = nextStepNum - 1;
    if (!validateStep(`step-${currentStepNum}`)) return;
    
    document.getElementById(`step-${currentStepNum}`).classList.replace('active-step', 'hidden-step');
    document.getElementById(`step-${nextStepNum}`).classList.replace('hidden-step', 'active-step');
    
    updateProgress(nextStepNum);
    window.scrollTo({ top: document.getElementById('survey-section').offsetTop - 20, behavior: 'smooth' });
}

function prevStep(prevStepNum) {
    const currentStepNum = prevStepNum + 1;
    document.getElementById(`step-${currentStepNum}`).classList.replace('active-step', 'hidden-step');
    document.getElementById(`step-${prevStepNum}`).classList.replace('hidden-step', 'active-step');
    
    updateProgress(prevStepNum);
    window.scrollTo({ top: document.getElementById('survey-section').offsetTop - 20, behavior: 'smooth' });
}

function updateProgress(stepNum) {
    for(let i=1; i<=3; i++) {
        const indicator = document.getElementById(`indicator-${i}`);
        if(i <= stepNum) indicator.classList.add('active');
        else indicator.classList.remove('active');
    }
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = ((stepNum - 1) / 2 * 100) + '%';
}

function setupLogin() {
    const dataList = document.getElementById('prof-names');
    allTeachers.forEach(prof => {
        const option = document.createElement('option');
        option.value = prof;
        dataList.appendChild(option);
    });
}
setupLogin();

function login() {
    const nameInput = document.getElementById('prof-name').value.trim();
    const errorMsg = document.getElementById('login-error');

    if (!nameInput) {
        errorMsg.textContent = "กรุณาพิมพ์ชื่อของท่าน";
        return;
    }

    // ค้นหาอาจารย์จากชื่อที่พิมพ์ (ไม่สนใจคำนำหน้า)
    const foundProf = allTeachers.find(t => t.includes(nameInput));

    if (foundProf) {
        currentProfName = foundProf;
        
        // ค้นหาว่าอาจารย์ท่านนี้สอนหัวข้อไหนบ้าง
        currentProfTopics = surveyConfig.topics.filter(topic => topic.teachers.includes(foundProf));
        
        if (currentProfTopics.length === 0) {
            errorMsg.textContent = "ไม่พบภาระงานสอนสำหรับชื่อนี้ในระบบ";
            return;
        }

        errorMsg.textContent = "";
        loadSurveyData();
        
        // สลับหน้าจอมาที่แบบสำรวจ และตั้งค่าหน้าแรก
        document.getElementById('login-section').classList.remove('active-section');
        document.getElementById('login-section').classList.add('hidden-section');
        
        document.getElementById('survey-section').classList.remove('hidden-section');
        document.getElementById('survey-section').classList.add('active-section');
        
        // รีเซ็ตหน้ากลับไปเป็น Step 1
        document.getElementById('step-1').classList.replace('hidden-step', 'active-step');
        document.getElementById('step-2').classList.replace('active-step', 'hidden-step');
        document.getElementById('step-3').classList.replace('active-step', 'hidden-step');
        updateProgress(1);
    } else {
        errorMsg.textContent = "ไม่พบรายชื่ออาจารย์ กรุณาตรวจสอบการสะกดคำ (เช่น สมชาย ใจดี)";
    }
}

function loadSurveyData() {
    document.getElementById('prof-name-display').textContent = currentProfName;

    const topicContainer = document.getElementById('topics-container');
    topicContainer.innerHTML = '';
    
    currentProfTopics.forEach((topic, index) => {
        // หาผู้สอนร่วม (เอาชื่ออาจารย์ทุกคนในหัวข้อนี้ ยกเว้นตัวเอง)
        const coTeachers = topic.teachers.filter(t => t !== currentProfName);
        const coTeacherHtml = coTeachers.length > 0 
            ? `<div class="co-teacher">ผู้สอนร่วม: ${coTeachers.join(', ')}</div>` 
            : '';
        
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-header">
                <h3>${index + 1}. ${topic.title}</h3>
                <div class="topic-meta">
                    <span class="meta-item">📅 วันที่: ${topic.date}</span>
                    <span class="meta-item">⏰ เวลา: ${topic.time}</span>
                </div>
                ${coTeacherHtml}
            </div>
            <div class="topic-body">
                <p class="hint">เลือกรูปแบบการสอนสำหรับหัวข้อนี้:</p>
                <div class="radio-group small">
                    <label class="radio-card radio-positive">
                        <input type="radio" name="format-${topic.id}" value="onsite" onchange="toggleOnlineOptions('${topic.id}')" required>
                        <span class="card-content">
                            <span class="icon">🏫</span><span class="text">Onsite</span>
                        </span>
                    </label>
                    <label class="radio-card radio-negative">
                        <input type="radio" name="format-${topic.id}" value="online" onchange="toggleOnlineOptions('${topic.id}')" required>
                        <span class="card-content">
                            <span class="icon">💻</span><span class="text">Online</span>
                        </span>
                    </label>
                </div>
                
                <div id="online-options-${topic.id}" class="sub-options hidden">
                    <p class="hint" style="margin-top: 10px; margin-bottom: 5px;">กรณีสอน Online:</p>
                    <div class="radio-group small">
                        <label class="radio-card radio-positive">
                            <input type="radio" name="online-prep-${topic.id}" value="staff">
                            <span class="card-content"><span class="text">ให้เจ้าหน้าที่เตรียมระบบให้</span></span>
                        </label>
                        <label class="radio-card radio-negative">
                            <input type="radio" name="online-prep-${topic.id}" value="self">
                            <span class="card-content"><span class="text">อาจารย์ขึ้นสอนเอง</span></span>
                        </label>
                    </div>
                </div>
            </div>
        `;
        topicContainer.appendChild(card);
    });

    // โหลดรายชื่อนักศึกษา
    const studentList = document.getElementById('student-list-display');
    studentList.innerHTML = '';
    surveyConfig.students.forEach(student => {
        const div = document.createElement('div');
        div.className = 'student-item';
        div.textContent = student;
        studentList.appendChild(div);
    });
}

function toggleOnlineOptions(topicId) {
    const formatRadios = document.getElementsByName(`format-${topicId}`);
    let selectedFormat = 'onsite';
    for (const radio of formatRadios) {
        if (radio.checked) selectedFormat = radio.value;
    }

    const onlineOptions = document.getElementById(`online-options-${topicId}`);
    const onlinePrepRadios = document.getElementsByName(`online-prep-${topicId}`);
    
    if (selectedFormat === 'online') {
        onlineOptions.classList.remove('hidden');
        onlinePrepRadios.forEach(radio => radio.setAttribute('required', 'true'));
    } else {
        onlineOptions.classList.add('hidden');
        onlinePrepRadios.forEach(radio => {
            radio.removeAttribute('required');
            radio.checked = false;
        });
    }
}

function selectAllFormat(formatValue) {
    currentProfTopics.forEach(topic => {
        const formatRadios = document.getElementsByName(`format-${topic.id}`);
        for (const radio of formatRadios) {
            if (radio.value === formatValue) {
                radio.checked = true;
                toggleOnlineOptions(topic.id);
            }
        }
    });
}

// ---------------------------------------------------------
// การส่งข้อมูลไปยัง Google Sheets
// ---------------------------------------------------------

document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'กำลังส่งข้อมูล...';
    submitBtn.disabled = true;

    // รวบรวมข้อมูลจากฟอร์ม
    const formData = new FormData(this);
    const result = Object.fromEntries(formData.entries());
    
    // สร้าง Payload เพื่อส่งไป Google Sheets
    const payload = {
        professorName: currentProfName,
        timestamp: new Date().toISOString(),
        videoRecord: result['video-record'],
        coiStatus: result['coi-status'],
        topics: []
    };

    // รวบรวมคำตอบของแต่ละหัวข้อ
    currentProfTopics.forEach(topic => {
        payload.topics.push({
            topicId: topic.id,
            topicTitle: topic.title,
            format: result[`format-${topic.id}`],
            onlinePrep: result[`online-prep-${topic.id}`] || "N/A"
        });
    });

    console.log("Data to send:", payload);

    if (!GOOGLE_SCRIPT_URL) {
        // กรณีไม่มี URL ให้จำลองว่าส่งสำเร็จ (สำหรับการทดสอบ)
        setTimeout(() => showSuccess(), 1000);
        return;
    }

    // ส่งข้อมูลไป Google Sheets (แบบทำงานเบื้องหลัง)
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // ใช้ no-cors สำหรับ Google Apps Script
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).catch(error => console.error('Error:', error));

    // แสดงหน้าความสำเร็จทันที ไม่ต้องรอให้ Google ประมวลผลเสร็จ (ลดเวลาการรอ)
    setTimeout(() => {
        showSuccess();
    }, 400); // หน่วงเวลา 0.4 วินาทีให้ดูเหมือนกำลังโหลด เพื่อความสวยงาม
});

function showSuccess() {
    document.getElementById('survey-section').classList.remove('active-section');
    document.getElementById('survey-section').classList.add('hidden-section');
    
    document.getElementById('success-section').classList.remove('hidden-section');
    document.getElementById('success-section').classList.add('active-section');
}
