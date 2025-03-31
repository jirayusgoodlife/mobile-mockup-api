// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

await fastify.register(import('@fastify/cors'), {
    origin: "*", // Allows all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"] // Allowed HTTP methods
});

await fastify.register(import('@fastify/rate-limit'), {
    max: 200,
    timeWindow: '1 minute'
})

fastify.setErrorHandler(function (error, request, reply) {
    if (error.statusCode === 429) {
        reply.code(429)
        error.message = 'คนเข้าเยอะรอก่อนๆ'
    }
    reply.send(error)
})

// Declare a route
fastify.get('/', async function handler(req, res) {
    return { "status": 200, "message": "ok" }
})

const my_item = [
    {
        "id": "f6948464-a4ca-452c-b6c0-995943b813a9",
        "image": "https://fastly.picsum.photos/id/512/640/480.jpg?hmac=us0ouQoaiD7C87w32bODpfSaS_xAGMT9K5jTQc8wYPQ",
        "title": "หัวข้อแพ้สลับ",
        "subtitle": "เนื้อหารถบัสอ่อนหวานปากห่อข้าวยันฤดู แอนดรอยด์แม่มดเช้าสีเมตตา ลูกชิ้นถีบคำสั่ง สถานีถกเถียงล่อช้าตัว",
        "date": "2025-03-03",
        "author": "อธิวัตร นฤทุกข์"
    },
    {
        "id": "299690c6-ca42-486f-bcee-9c5bac1aab3b",
        "image": "https://fastly.picsum.photos/id/1026/640/480.jpg?hmac=FIppOgvnDubk8idNnopFHUBjybr8j6TYZ2toGykcZrg",
        "title": "หัวข้อเศษซี่บอก",
        "subtitle": "เนื้อหาชะนีหุ้มแคะบาดเศษอาหารเยาวชนแพ้ถกเถียง หอยดูเดี่ยวสาธารณรัฐเครื่องบินเยาวชนมลายู อายุแท็กซี่เป็นกับ หายพิพักพิพ่วนทอดมันคะแนนเลี้ยวสม่ำเสมอกบ ครูพิพักพิพ่วนพับรัฐบาลไต้หวัน",
        "date": "2025-03-01",
        "author": "จำรัส เช้าวันดี"
    },
    {
        "id": "bd92c081-a88e-47bb-927d-3efdeb595dd2",
        "image": "https://fastly.picsum.photos/id/368/640/480.jpg?hmac=R0QRS-3U0aK730B0YqstAGiKCAq2TaVXx9qK5Khby-4",
        "title": "หัวข้อเฉยลืมคาว",
        "subtitle": "เนื้อหาทดขี้ไคลร่างกายเตียนเพราะ ทดลูกซ่อมเบิ่งน้ำหวานเสรีนิยมเหตุ และติดหว่านเลือกที่หนุน มอบเขยิบลูกตาแผนที่ ข้าวกำด้วยอบอุ่น",
        "date": "2025-03-23",
        "author": "จักรชัย นครเทพ"
    },
    {
        "id": "9de111dd-5b5f-41dd-9641-f116da5c2764",
        "image": "https://fastly.picsum.photos/id/503/640/480.jpg?hmac=NIEJLAyEQNLxVYxfluStChxkQFU620tNvBnrfDjcCOM",
        "title": "หัวข้อริมเล่ม",
        "subtitle": "เนื้อหาบริโภคแข็งสุขภาพเลี้ยวชนิดตื่น ขัดขาดเคิ่งแม้วินโดวส์ กล่าวตู้ชุดนอนกำไรเบียร์ ศาสตร์กรดไหลย้อนสีราก รัฐประหารที่ตะปูตื่น",
        "date": "2025-03-25",
        "author": "พัชรพร ถนอมมนุษย์"
    },
    {
        "id": "da5a3922-41f2-4b8a-94f3-e6738030b9c6",
        "image": "https://fastly.picsum.photos/id/515/640/480.jpg?hmac=O5ytfzzM-LbU5V07iam0XPho51DPk6u7LAIy0lD3dIA",
        "title": "หัวข้อใจกีฬา",
        "subtitle": "เนื้อหาชุดนอนโรงสีเข้ารหัสข้าวหมูแดงสีเทาสมอง กะเพราน้าตับผีกไต้หวันกิโลเมตรตกลงวิชาชีพ ครูไต้บอกใบ้จาก หุ้มสุดท้ายตัวเมียสีแดง",
        "date": "2025-03-14",
        "author": "เสรี นากกนก"
    },
    {
        "id": "8b43e374-2134-4733-b989-1f4540626676",
        "image": "https://fastly.picsum.photos/id/73/640/480.jpg?hmac=l7RovuJV4SFRSK5pxDEMkMEyCDD7SRzpc5BMwRdOP0g",
        "title": "หัวข้อห่มผ้า",
        "subtitle": "เนื้อหาน้ำเย็นวินโดวส์แข่งขัน คำถามรถบัสง่วงบอกสีเทากิโลเมตรผ่อชะนี ยึดกระจายลงมือวิ่งดำบริโภค รถทัวร์ขนมชั้นทอดสบายแข่งขันห้องเรียนแรก",
        "date": "2025-03-22",
        "author": "เทอดศักดิ์ ทวีเดช"
    },
    {
        "id": "ec6cf332-6c31-4a35-bbb1-6408ef0c21ee",
        "image": "https://fastly.picsum.photos/id/735/640/480.jpg?hmac=anTc2bQ_AijSPc-nOh5ed4RscSULMC5xresz6Sf9tfc",
        "title": "หัวข้อหุ้ม",
        "subtitle": "เนื้อหาแข้งแลกหาม้าย หมอกแก้วเคเอฟซีสาธารณรัฐคู่ตะแกรง แผนที่ไค้หันอิฐตั้งแต่แสงในขันน้ำ",
        "date": "2025-03-02",
        "author": "ชิดชนก พรรษาสกุล"
    },
    {
        "id": "ca13cd3e-7cfe-4180-a790-49b43d94c49d",
        "image": "https://fastly.picsum.photos/id/69/640/480.jpg?hmac=sVd2gLNUYi4ZsWLKe74RpFDiZqC3CdoZDeXL8475Yqk",
        "title": "หัวข้อและดอกไม้",
        "subtitle": "เนื้อหาหลังคาปี่เป้าชุดนอนตรวจ โก๋แก่กรรมการแตะผิดลงมือสมององค์ หึงสาเฉยคนไข้กูกว้างรถถัง หน้ากากพ่อเครื่องบินตีนทุกข์กาม ห่อข้าวหมีแก่กบมอบ",
        "date": "2025-03-04",
        "author": "ปริญญา ถนิมมาศ"
    },
    {
        "id": "fdecd184-200e-4fe1-86f9-64c7b3dbfc37",
        "image": "https://fastly.picsum.photos/id/250/640/480.jpg?hmac=Ja5xfJfzMIwYBidM8Rr4HxGtuKxsJzMRu2fxvvBCnWM",
        "title": "หัวข้อคู่เดี่ยว",
        "subtitle": "เนื้อหาซ่อนเศษอาหารอายุทาน ในอัศจรรย์ห่วงใยสหภาพหุ้มของหวานขันน้ำ เคารพหมอกวาดทรัพย์สิน",
        "date": "2025-03-02",
        "author": "เลิศเดช ไตรบรรพ"
    },
    {
        "id": "79116c56-1455-443c-9109-dbad67b47d62",
        "image": "https://fastly.picsum.photos/id/625/640/480.jpg?hmac=_04npDgR5MY7eGp95wjttIt_szSgO5DrYYe-Lm9UqF8",
        "title": "หัวข้อที่ดินแมค",
        "subtitle": "เนื้อหาแผนที่ต้นดูกว้างเป็นกรรมการนั่ง คะแนนเสียบแลก ในลืมคาวเย็บเทเลแกรม จากโน่นความหายแก พนมมือทอดลูกดอกไม้",
        "date": "2025-03-21",
        "author": "ปิยบุตร ถนอมกุลบุตร"
    }
]

function validate_image(string) {
    const regex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(string);
}

function validate_date(string) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(string);
}


fastify.post('/mobile-exam', async (req, res) => {
    const { image, title, subtitle, date, author } = req.body;

    if (!image || !title || !subtitle || !validate_image(image) || !validate_date(date)) {
        return res.status(400).send({
            status: 400,
            message: "Invalid input, all fields are required"
        });
    }

    const newItem = { id: "c95f6d1a-8f98-441a-93a4-c69ec3313650", image: image, title: title, subtitle: subtitle, date: date, author: author };
    return {
        "status": "insert success",
        "message": "ทำการเพิ่มข้อมูลสำเร็จ",
        "data": newItem
    }
})

fastify.get('/mobile-exam', async (req, res) => {

    return {
        "status": 200,
        "message": "ok",
        "data": my_item.map(v => ({
            id: v.id,
            image: v.image,
            title: v.title,
            subtitle: v.subtitle
        }))
    }
})

fastify.get('/mobile-exam/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = my_item.find(i => i.id === id);
        if (!item) {
            return res.status(404).send({
                status: 404,
                message: "item not found"
            });
        }
        return {
            status: 200,
            message: "ok",
            data: item
        };
    } catch (e) {
        return res.status(500).send({
            status: 500,
            message: "internal server error"
        });
    }
});

// Run the server!
try {
    await fastify.listen({ host: "0.0.0.0", port: 6702 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}