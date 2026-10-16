/* ==========================================================================
   BẢNG TUẦN HOÀN HÓA HỌC TƯƠNG TÁC - SCRIPT.JS
   Nguồn dữ liệu: IUPAC.ATOMIC WEIGHT OF THE ELEMENTS 2019
   Đầy đủ 118 nguyên tố, tìm kiếm/lọc thông minh, cửa sổ Lịch sử riêng,
   và Mô hình cấu hình Electron 3D tương tác (không biến dạng khi phóng to).
   ========================================================================== */

const CATEGORY_INFO = {
  "alkali": { name: "Kim loại kiềm", color: "#e11d48", bg: "#ffe4e6", border: "#fb7185", text: "#9f1239" },
  "alkaline": { name: "Kim loại kiềm thổ", color: "#ea580c", bg: "#ffedd5", border: "#fb923c", text: "#9a3412" },
  "transition": { name: "Kim loại chuyển tiếp", color: "#0284c7", bg: "#e0f2fe", border: "#38bdf8", text: "#075985" },
  "post-transition": { name: "Kim loại sau chuyển tiếp", color: "#059669", bg: "#d1fae5", border: "#34d399", text: "#065f46" },
  "metalloid": { name: "Á kim", color: "#0d9488", bg: "#ccfbf1", border: "#2dd4bf", text: "#115e59" },
  "nonmetal": { name: "Phi kim khác", color: "#16a34a", bg: "#dcfce7", border: "#4ade80", text: "#166534" },
  "halogen": { name: "Halogen", color: "#ca8a04", bg: "#fef9c3", border: "#facc15", text: "#854d0e" },
  "noble": { name: "Khí hiếm", color: "#9333ea", bg: "#f3e8ff", border: "#c084fc", text: "#581c87" },
  "lanthanide": { name: "Họ Lantan", color: "#db2777", bg: "#fce7f3", border: "#f472b6", text: "#831843" },
  "actinide": { name: "Họ Actini", color: "#4f46e5", bg: "#e0e7ff", border: "#818cf8", text: "#312e81" }
};

const GROUP_HEADERS = [
  { col: 1, num: "1", roman: "IA" },
  { col: 2, num: "2", roman: "IIA" },
  { col: 3, num: "3", roman: "IIIB" },
  { col: 4, num: "4", roman: "IVB" },
  { col: 5, num: "5", roman: "VB" },
  { col: 6, num: "6", roman: "VIB" },
  { col: 7, num: "7", roman: "VIIB" },
  { col: 8, num: "8", roman: "VIIIB" },
  { col: 9, num: "9", roman: "VIIIB" },
  { col: 10, num: "10", roman: "VIIIB" },
  { col: 11, num: "11", roman: "IB" },
  { col: 12, num: "12", roman: "IIB" },
  { col: 13, num: "13", roman: "IIIA" },
  { col: 14, num: "14", roman: "IVA" },
  { col: 15, num: "15", roman: "VA" },
  { col: 16, num: "16", roman: "VIA" },
  { col: 17, num: "17", roman: "VIIA" },
  { col: 18, num: "18", roman: "VIIIA" }
];

const SHELL_NAMES = ["K", "L", "M", "N", "O", "P", "Q"];

const ELEMENTS_DATA = [
  {
    "z": 1,
    "sym": "H",
    "nameEn": "Hydrogen",
    "nameVi": "Hiđro",
    "weight": "1.008",
    "weightShort": "1.008",
    "cat": "nonmetal",
    "period": 1,
    "group": "1 (IA)",
    "row": 1,
    "col": 1,
    "shells": [
      1
    ],
    "config": "1s¹",
    "valence": "I",
    "en": "2.20",
    "ox": "-1, +1",
    "discoverer": "Henry Cavendish",
    "year": "1766",
    "story": "Năm 1766, nhà khoa học người Anh Henry Cavendish lần đầu tiên nhận diện Hiđro là một khí riêng biệt khi cho kim loại tác dụng với axit và gọi nó là 'không khí dễ cháy'. Năm 1783, Antoine Lavoisier đặt tên là Hydrogen (từ tiếng Hy Lạp 'hydro' nghĩa là nước và 'genes' nghĩa là sinh ra). Đây là nguyên tố phổ biến nhất trong vũ trụ, chiếm khoảng 75% khối lượng vật chất thông thường và là nhiên liệu chính của các ngôi sao."
  },
  {
    "z": 2,
    "sym": "He",
    "nameEn": "Helium",
    "weight": "4.002 602(2)",
    "weightShort": "4.0026",
    "cat": "noble",
    "period": 1,
    "group": "18 (VIIIA)",
    "row": 1,
    "col": 18,
    "shells": [
      2
    ],
    "config": "1s²",
    "valence": "0 (Khí hiếm)",
    "en": "—",
    "ox": "0",
    "discoverer": "Pierre Janssen & Norman Lockyer",
    "year": "1868",
    "story": "Heli là nguyên tố đầu tiên được phát hiện ngoài Trái Đất trước khi tìm thấy trên mặt đất. Năm 1868, nhà thiên văn Pháp Pierre Janssen và nhà thiên văn Anh Norman Lockyer độc lập quan sát thấy một vạch phổ màu vàng mới trong ánh sáng Mặt Trời khi nhật thực toàn phần, nên đặt tên theo thần Mặt Trời Hy Lạp 'Helios'. Năm 1895, William Ramsay mới phân lập được Heli trên Trái Đất từ quặng urani."
  },
  {
    "z": 3,
    "sym": "Li",
    "nameEn": "Lithium",
    "weight": "6.94",
    "weightShort": "6.94",
    "cat": "alkali",
    "period": 2,
    "group": "1 (IA)",
    "row": 2,
    "col": 1,
    "shells": [
      2,
      1
    ],
    "config": "[He] 2s¹",
    "valence": "I",
    "en": "0.98",
    "ox": "+1",
    "discoverer": "Johan August Arfwedson",
    "year": "1817",
    "story": "Được phát hiện năm 1817 bởi nhà hóa học Thụy Điển Johan August Arfwedson tại phòng thí nghiệm của Jöns Jakob Berzelius khi phân tích khoáng vật petalit. Tên gọi bắt nguồn từ chữ Hy Lạp 'lithos' (đá) vì nó được tìm thấy trong khoáng chất rắn, khác với Natri và Kali lúc bấy giờ được tìm thấy trong tro thực vật. Liti là kim loại nhẹ nhất và là trái tim của công nghệ pin sạc Li-ion hiện đại."
  },
  {
    "z": 4,
    "sym": "Be",
    "nameEn": "Beryllium",
    "weight": "9.012 1831(5)",
    "weightShort": "9.0122",
    "cat": "alkaline",
    "period": 2,
    "group": "2 (IIA)",
    "row": 2,
    "col": 2,
    "shells": [
      2,
      2
    ],
    "config": "[He] 2s²",
    "valence": "II",
    "en": "1.57",
    "ox": "+2",
    "discoverer": "Louis-Nicolas Vauquelin",
    "year": "1798",
    "story": "Năm 1798, nhà hóa học Pháp Louis-Nicolas Vauquelin phát hiện nguyên tố này dưới dạng oxit trong khoáng vật beryl và ngọc lục bảo (emerald). Ban đầu nó từng được gọi là 'Glucinium' (vị ngọt) do muối của nó có vị ngọt nhưng thực chất rất độc. Ngày nay Beri được dùng làm cửa sổ tia X và gương kính thiên văn không gian James Webb nhờ độ cứng cao và siêu nhẹ."
  },
  {
    "z": 5,
    "sym": "B",
    "nameEn": "Boron",
    "weight": "10.81",
    "weightShort": "10.81",
    "cat": "metalloid",
    "period": 2,
    "group": "13 (IIIA)",
    "row": 2,
    "col": 13,
    "shells": [
      2,
      3
    ],
    "config": "[He] 2s² 2p¹",
    "valence": "III",
    "en": "2.04",
    "ox": "+3",
    "discoverer": "Joseph Louis Gay-Lussac, Louis Jacques Thénard & Humphry Davy",
    "year": "1808",
    "story": "Hợp chất hàn the (borax) đã được con người sử dụng từ hàng nghìn năm trước, nhưng đến năm 1808 nguyên tố Bo mới được phân lập độc lập bởi Gay-Lussac và Thénard tại Pháp cùng Humphry Davy tại Anh. Bo là một á kim thiết yếu trong sản xuất thủy tinh chịu nhiệt Pyrex, sợi thủy tinh và nam châm siêu mạnh Neodymium (Nd₂Fe₁₄B)."
  },
  {
    "z": 6,
    "sym": "C",
    "nameEn": "Carbon",
    "weight": "12.011",
    "weightShort": "12.011",
    "cat": "nonmetal",
    "period": 2,
    "group": "14 (IVA)",
    "row": 2,
    "col": 14,
    "shells": [
      2,
      4
    ],
    "config": "[He] 2s² 2p²",
    "valence": "II, IV",
    "en": "2.55",
    "ox": "-4, -3, -2, -1, 0, +1, +2, +3, +4",
    "discoverer": "Biết đến từ thời cổ đại (Antoine Lavoisier định danh)",
    "year": "Cổ đại (1789)",
    "story": "Con người đã biết đến Carbon từ thời tiền sử dưới dạng than củi, bồ hóng và kim cương. Tên gọi 'Carbon' do Lavoisier đặt năm 1789 từ tiếng Latinh 'carbo' (than). Nhờ khả năng tạo liên kết cộng hóa trị bền vững với chính nó và các nguyên tố khác, Carbon là nền tảng của mọi sự sống hữu cơ trên Trái Đất và tạo ra các thù hình kỳ diệu như kim cương, than chì, fullerene và graphene."
  },
  {
    "z": 7,
    "sym": "N",
    "nameEn": "Nitrogen",
    "weight": "14.007",
    "weightShort": "14.007",
    "cat": "nonmetal",
    "period": 2,
    "group": "15 (VA)",
    "row": 2,
    "col": 15,
    "shells": [
      2,
      5
    ],
    "config": "[He] 2s² 2p³",
    "valence": "I, II, III, IV, V",
    "en": "3.04",
    "ox": "-3, -2, -1, +1, +2, +3, +4, +5",
    "discoverer": "Daniel Rutherford",
    "year": "1772",
    "story": "Năm 1772, bác sĩ và nhà hóa học người Scotland Daniel Rutherford phát hiện ra Nitơ khi loại bỏ oxi và khí carbonic khỏi không khí kín, để lại một phần khí không duy trì sự cháy và sự sống. Chiếm tới 78% thể tích khí quyển Trái Đất, Nitrogen là thành phần cốt lõi của axit amin, protein, ADN và phân bón nông nghiệp."
  },
  {
    "z": 8,
    "sym": "O",
    "nameEn": "Oxygen",
    "weight": "15.999",
    "weightShort": "15.999",
    "cat": "nonmetal",
    "period": 2,
    "group": "16 (VIA)",
    "row": 2,
    "col": 16,
    "shells": [
      2,
      6
    ],
    "config": "[He] 2s² 2p⁴",
    "valence": "II",
    "en": "3.44",
    "ox": "-2, -1, +1, +2",
    "discoverer": "Carl Wilhelm Scheele & Joseph Priestley",
    "year": "1774",
    "story": "Nhà hóa học Thụy Điển Carl Wilhelm Scheele tạo ra Oxi khoảng năm 1772 và nhà khoa học Anh Joseph Priestley công bố độc lập năm 1774 khi nung nóng thủy ngân(II) oxit bằng kính lúp hội tụ ánh nắng Mặt Trời. Antoine Lavoisier đã giải thích đúng bản chất của quá trình cháy và hô hấp nhờ Oxi, lật đổ thuyết Phlogiston tồn tại hàng thế kỷ."
  },
  {
    "z": 9,
    "sym": "F",
    "nameEn": "Fluorine",
    "weight": "18.998 403 163(6)",
    "weightShort": "18.998",
    "cat": "halogen",
    "period": 2,
    "group": "17 (VIIA)",
    "row": 2,
    "col": 17,
    "shells": [
      2,
      7
    ],
    "config": "[He] 2s² 2p⁵",
    "valence": "I",
    "en": "3.98",
    "ox": "-1",
    "discoverer": "Henri Moissan",
    "year": "1886",
    "story": "Do có độ âm điện và tính oxi hóa mạnh nhất trong tất cả các nguyên tố, Flo cực kỳ nguy hiểm và từng khiến nhiều nhà hóa học thế kỷ 19 bị nhiễm độc nặng khi cố phân lập. Năm 1886, nhà hóa học Pháp Henri Moissan đã điện phân thành công hỗn hợp kali bifluoride trong axit flohidric khan ở nhiệt độ thấp để thu được khí Flo nguyên chất, công trình mang lại cho ông giải Nobel Hóa học năm 1906."
  },
  {
    "z": 10,
    "sym": "Ne",
    "nameEn": "Neon",
    "weight": "20.1797(6)",
    "weightShort": "20.180",
    "cat": "noble",
    "period": 2,
    "group": "18 (VIIIA)",
    "row": 2,
    "col": 18,
    "shells": [
      2,
      8
    ],
    "config": "[He] 2s² 2p⁶",
    "valence": "0 (Khí hiếm)",
    "en": "—",
    "ox": "0",
    "discoverer": "William Ramsay & Morris Travers",
    "year": "1898",
    "story": "Năm 1898 tại Luân Đôn, William Ramsay và Morris Travers làm lạnh không khí đến trạng thái lỏng rồi chưng cất phân đoạn phần khí còn lại. Khi cho phóng điện qua mẫu khí mới, họ kinh ngạc trước ánh sáng đỏ cam rực rỡ phát ra và đặt tên là 'Neon' (từ tiếng Hy Lạp 'neos' nghĩa là 'mới')."
  },
  {
    "z": 11,
    "sym": "Na",
    "nameEn": "Sodium",
    "weight": "22.989 769 28(2)",
    "weightShort": "22.990",
    "cat": "alkali",
    "period": 3,
    "group": "1 (IA)",
    "row": 3,
    "col": 1,
    "shells": [
      2,
      8,
      1
    ],
    "config": "[Ne] 3s¹",
    "valence": "I",
    "en": "0.93",
    "ox": "-1, +1",
    "discoverer": "Humphry Davy",
    "year": "1807",
    "story": "Chỉ vài ngày sau khi tìm ra Kali vào tháng 10/1807, nhà hóa học Anh Humphry Davy đã điện phân xút ăn da (NaOH) nóng chảy và thu được những giọt kim loại ánh bạc phản ứng mãnh liệt với nước. Ký hiệu 'Na' xuất phát từ chữ Latinh mới 'Natrium' (gắn với muối khoáng tự nhiên natron của người Ai Cập cổ đại)."
  },
  {
    "z": 12,
    "sym": "Mg",
    "nameEn": "Magnesium",
    "weight": "24.305",
    "weightShort": "24.305",
    "cat": "alkaline",
    "period": 3,
    "group": "2 (IIA)",
    "row": 3,
    "col": 2,
    "shells": [
      2,
      8,
      2
    ],
    "config": "[Ne] 3s²",
    "valence": "II",
    "en": "1.31",
    "ox": "+2",
    "discoverer": "Joseph Black (nhận diện) / Humphry Davy (phân lập)",
    "year": "1755 / 1808",
    "story": "Tên gọi bắt nguồn từ vùng Magnesia ở Hy Lạp. Năm 1755, Joseph Black chứng minh magnesia alba là hợp chất của một nguyên tố riêng biệt, và đến năm 1808 Humphry Davy phân lập được kim loại Magiê bằng phương pháp điện phân. Magiê là nguyên tố trung tâm của phân tử diệp lục (chlorophyll) giúp cây xanh quang hợp và tạo ra ngọn lửa trắng chói lòa khi cháy."
  },
  {
    "z": 13,
    "sym": "Al",
    "nameEn": "Aluminium",
    "weight": "26.981 5384(3)",
    "weightShort": "26.982",
    "cat": "post-transition",
    "period": 3,
    "group": "13 (IIIA)",
    "row": 3,
    "col": 13,
    "shells": [
      2,
      8,
      3
    ],
    "config": "[Ne] 3s² 3p¹",
    "valence": "III",
    "en": "1.61",
    "ox": "+3",
    "discoverer": "Hans Christian Ørsted & Friedrich Wöhler",
    "year": "1825",
    "story": "Dù là kim loại phổ biến nhất trong vỏ Trái Đất, Nhôm từng quý hơn cả vàng vào giữa thế kỷ 19 vì cực kỳ khó tách khỏi quặng bô-xít. Hoàng đế Pháp Napoléon III từng dùng bộ đồ ăn bằng nhôm để đãi những vị khách quý nhất. Phải đến năm 1886, quy trình điện phân Hall-Héroult ra đời mới biến Nhôm thành kim loại phổ biến trong hàng không và đời sống."
  },
  {
    "z": 14,
    "sym": "Si",
    "nameEn": "Silicon",
    "weight": "28.085",
    "weightShort": "28.085",
    "cat": "metalloid",
    "period": 3,
    "group": "14 (IVA)",
    "row": 3,
    "col": 14,
    "shells": [
      2,
      8,
      4
    ],
    "config": "[Ne] 3s² 3p²",
    "valence": "IV",
    "en": "1.90",
    "ox": "-4, +2, +4",
    "discoverer": "Jöns Jakob Berzelius",
    "year": "1824",
    "story": "Năm 1824, nhà hóa học Thụy Điển Jöns Jakob Berzelius điều chế được Silic vô định hình tinh khiết bằng cách đun nóng kali với khí silic tetraflorua. Tên gọi xuất phát từ tiếng Latinh 'silex' (đá lửa). Là nguyên tố phổ biến thứ hai trong vỏ Trái Đất sau Oxi, Silic bán dẫn chính là nền tảng tạo nên các vi mạch điện tử, máy tính và Thung lũng Silicon ngày nay."
  },
  {
    "z": 15,
    "sym": "P",
    "nameEn": "Phosphorus",
    "weight": "30.973 761 998(5)",
    "weightShort": "30.974",
    "cat": "nonmetal",
    "period": 3,
    "group": "15 (VA)",
    "row": 3,
    "col": 15,
    "shells": [
      2,
      8,
      5
    ],
    "config": "[Ne] 3s² 3p³",
    "valence": "III, V",
    "en": "2.19",
    "ox": "-3, +3, +5",
    "discoverer": "Hennig Brand",
    "year": "1669",
    "story": "Năm 1669 tại Hamburg (Đức), nhà giả kim Hennig Brand chưng cất hàng nghìn lít nước tiểu với hy vọng tìm ra 'Hòn đá Phù thủy' biến kim loại thành vàng. Thay vì vàng, ông thu được một chất sáp trắng tự phát sáng kỳ ảo trong bóng tối và đặt tên là Phosphorus ('vật mang ánh sáng' trong tiếng Hy Lạp). Đây là nguyên tố đầu tiên trong lịch sử có hồ sơ ghi nhận rõ tên người và năm phát hiện."
  },
  {
    "z": 16,
    "sym": "S",
    "nameEn": "Sulfur",
    "weight": "32.06",
    "weightShort": "32.06",
    "cat": "nonmetal",
    "period": 3,
    "group": "16 (VIA)",
    "row": 3,
    "col": 16,
    "shells": [
      2,
      8,
      6
    ],
    "config": "[Ne] 3s² 3p⁴",
    "valence": "II, IV, VI",
    "en": "2.58",
    "ox": "-2, +2, +4, +6",
    "discoverer": "Biết đến từ thời cổ đại (Antoine Lavoisier xác nhận)",
    "year": "Cổ đại (1777)",
    "story": "Lưu huỳnh (diêm sinh) đã được người cổ đại ở Trung Hoa, Ai Cập và Hy Lạp khai thác từ các miệng núi lửa để tẩy trắng vải, xông khói khử trùng và chế tạo thuốc súng. Năm 1777, Antoine Lavoisier thuyết phục cộng đồng khoa học rằng Lưu huỳnh là một nguyên tố hóa học cơ bản chứ không phải hợp chất."
  },
  {
    "z": 17,
    "sym": "Cl",
    "nameEn": "Chlorine",
    "weight": "35.45",
    "weightShort": "35.45",
    "cat": "halogen",
    "period": 3,
    "group": "17 (VIIA)",
    "row": 3,
    "col": 17,
    "shells": [
      2,
      8,
      7
    ],
    "config": "[Ne] 3s² 3p⁵",
    "valence": "I, III, V, VII",
    "en": "3.16",
    "ox": "-1, +1, +3, +5, +7",
    "discoverer": "Carl Wilhelm Scheele",
    "year": "1774",
    "story": "Năm 1774, Carl Wilhelm Scheele thu được khí Clo khi cho axit clohidric tác dụng với quặng pyrolusit (MnO₂), nhưng ông tưởng đó là một hợp chất chứa oxi. Năm 1810, Humphry Davy chứng minh đây là một nguyên tố độc lập và đặt tên là 'Chlorine' từ chữ Hy Lạp 'chloros' (màu vàng lục nhạt). Clo đóng vai trò quan trọng trong khử trùng nước sạch và sản xuất nhựa PVC."
  },
  {
    "z": 18,
    "sym": "Ar",
    "nameEn": "Argon",
    "weight": "39.948(1)",
    "weightShort": "39.948",
    "cat": "noble",
    "period": 3,
    "group": "18 (VIIIA)",
    "row": 3,
    "col": 18,
    "shells": [
      2,
      8,
      8
    ],
    "config": "[Ne] 3s² 3p⁶",
    "valence": "0 (Khí hiếm)",
    "en": "—",
    "ox": "0",
    "discoverer": "Lord Rayleigh & William Ramsay",
    "year": "1894",
    "story": "Năm 1894, Lord Rayleigh và William Ramsay nhận thấy khí nitơ tách từ không khí luôn nặng hơn khoảng 0.5% so với nitơ điều chế từ hợp chất hóa học. Khi loại bỏ toàn bộ nitơ, oxi, nước và CO₂ khỏi mẫu không khí, họ tìm thấy một khí hoàn toàn trơ không phản ứng với bất kỳ chất nào và đặt tên là Argon (từ tiếng Hy Lạp 'argos' nghĩa là 'lười biếng / không hoạt động')."
  },
  {
    "z": 19,
    "sym": "K",
    "nameEn": "Potassium",
    "weight": "39.0983(1)",
    "weightShort": "39.098",
    "cat": "alkali",
    "period": 4,
    "group": "1 (IA)",
    "row": 4,
    "col": 1,
    "shells": [
      2,
      8,
      8,
      1
    ],
    "config": "[Ar] 4s¹",
    "valence": "I",
    "en": "0.82",
    "ox": "+1",
    "discoverer": "Humphry Davy",
    "year": "1807",
    "story": "Kali là kim loại đầu tiên được phân lập bằng phương pháp điện phân. Năm 1807, khi Humphry Davy cho dòng điện từ cột pin Volta đi qua kali hiđroxit (potash) nóng chảy, các hạt kim loại sáng bóng bật ra và bốc cháy với ngọn lửa màu tím hoa cà tuyệt đẹp. Ký hiệu 'K' bắt nguồn từ từ 'Kalium' (dẫn xuất từ chữ Ả Rập 'al-qalyah' nghĩa là tro thực vật)."
  },
  {
    "z": 20,
    "sym": "Ca",
    "nameEn": "Calcium",
    "weight": "40.078(4)",
    "weightShort": "40.078",
    "cat": "alkaline",
    "period": 4,
    "group": "2 (IIA)",
    "row": 4,
    "col": 2,
    "shells": [
      2,
      8,
      8,
      2
    ],
    "config": "[Ar] 4s²",
    "valence": "II",
    "en": "1.00",
    "ox": "+2",
    "discoverer": "Humphry Davy",
    "year": "1808",
    "story": "Người La Mã cổ đại đã biết nung đá vôi để tạo ra vôi sống ('calx'), nhưng mãi đến năm 1808 Humphry Davy mới cô lập được kim loại Canxi nguyên chất bằng cách điện phân hỗn hợp vôi và thủy ngân oxit. Canxi là nguyên tố kim loại dồi dào nhất trong cơ thể người, cấu tạo nên hệ xương, răng và truyền dẫn tín hiệu tế bào."
  },
  {
    "z": 21,
    "sym": "Sc",
    "nameEn": "Scandium",
    "nameVi": "Scanđi",
    "weight": "44.955 908(5)",
    "weightShort": "44.956",
    "cat": "transition",
    "period": 4,
    "group": "3 (IIIB)",
    "row": 4,
    "col": 3,
    "shells": [
      2,
      8,
      9,
      2
    ],
    "config": "[Ar] 3d¹ 4s²",
    "valence": "III",
    "en": "1.36",
    "ox": "+3",
    "discoverer": "Lars Fredrik Nilson",
    "year": "1879",
    "story": "Năm 1869, Dmitri Mendeleev đã dự đoán sự tồn tại của một nguyên tố có nguyên tử khối khoảng 44 và gọi tạm là 'Eka-boron'. Đúng 10 năm sau (1879), nhà hóa học Thụy Điển Lars Fredrik Nilson tách được nguyên tố này từ khoáng vật euxenit tại vùng Scandinavia và đặt tên là Scandium, khẳng định tính đúng đắn rực rỡ của Định luật Tuần hoàn Mendeleev."
  },
  {
    "z": 22,
    "sym": "Ti",
    "nameEn": "Titanium",
    "nameVi": "Titan",
    "weight": "47.867(1)",
    "weightShort": "47.867",
    "cat": "transition",
    "period": 4,
    "group": "4 (IVB)",
    "row": 4,
    "col": 4,
    "shells": [
      2,
      8,
      10,
      2
    ],
    "config": "[Ar] 3d² 4s²",
    "valence": "II, III, IV",
    "en": "1.54",
    "ox": "+2, +3, +4",
    "discoverer": "William Gregor",
    "year": "1791",
    "story": "Được phát hiện năm 1791 tại vùng Cornwall (Anh) bởi mục sư kiêm nhà khoáng vật học nghiệp dư William Gregor trong cát đen ilmenit. Năm 1795, nhà hóa học Đức Martin Heinrich Klaproth độc lập tìm thấy nó và đặt tên là Titanium theo tên các vị thần khổng lồ Titans trong thần thoại Hy Lạp. Titan bền như thép nhưng nhẹ hơn 45% và tương thích sinh học hoàn hảo với xương người."
  },
  {
    "z": 23,
    "sym": "V",
    "nameEn": "Vanadium",
    "nameVi": "Vanađi",
    "weight": "50.9415(1)",
    "weightShort": "50.942",
    "cat": "transition",
    "period": 4,
    "group": "5 (VB)",
    "row": 4,
    "col": 5,
    "shells": [
      2,
      8,
      11,
      2
    ],
    "config": "[Ar] 3d³ 4s²",
    "valence": "II, III, IV, V",
    "en": "1.63",
    "ox": "+2, +3, +4, +5",
    "discoverer": "Andrés Manuel del Río & Nils Gabriel Sefström",
    "year": "1801 / 1830",
    "story": "Nhà khoáng vật học Andrés Manuel del Río phát hiện ra nguyên tố này tại Mexico năm 1801 và gọi là 'Erythronium', nhưng sau đó bị thuyết phục nhầm rằng đó chỉ là crom không tinh khiết. Năm 1830, nhà hóa học Thụy Điển Nils Gabriel Sefström tái khám phá ra nó và đặt tên là Vanadium theo tên Vanadis (nữ thần sắc đẹp Freyja vùng Bắc Âu) vì các hợp chất của nó có màu sắc vô cùng rực rỡ."
  },
  {
    "z": 24,
    "sym": "Cr",
    "nameEn": "Chromium",
    "nameVi": "Crom",
    "weight": "51.9961(6)",
    "weightShort": "51.996",
    "cat": "transition",
    "period": 4,
    "group": "6 (VIB)",
    "row": 4,
    "col": 6,
    "shells": [
      2,
      8,
      13,
      1
    ],
    "config": "[Ar] 3d⁵ 4s¹",
    "valence": "II, III, VI",
    "en": "1.66",
    "ox": "+2, +3, +6",
    "discoverer": "Louis-Nicolas Vauquelin",
    "year": "1797",
    "story": "Năm 1797, nhà hóa học Pháp Louis-Nicolas Vauquelin phân lập được kim loại Crom từ khoáng vật crocoit (chì cromat đỏ tươi) vùng Siberia. Tên gọi bắt nguồn từ chữ Hy Lạp 'chroma' (màu sắc) vì hợp chất của Crom mang đủ sắc thái từ đỏ ruby, xanh ngọc lục bảo đến vàng tươi. Crom cũng là thành phần chính giúp thép không gỉ (inox) sáng bóng và chống ăn mòn."
  },
  {
    "z": 25,
    "sym": "Mn",
    "nameEn": "Manganese",
    "nameVi": "Mangan",
    "weight": "54.938 043(2)",
    "weightShort": "54.938",
    "cat": "transition",
    "period": 4,
    "group": "7 (VIIB)",
    "row": 4,
    "col": 7,
    "shells": [
      2,
      8,
      13,
      2
    ],
    "config": "[Ar] 3d⁵ 4s²",
    "valence": "II, III, IV, VI, VII",
    "en": "1.55",
    "ox": "+2, +3, +4, +6, +7",
    "discoverer": "Johan Gottlieb Gahn",
    "year": "1774",
    "story": "Sau khi Carl Wilhelm Scheele chứng minh quặng pyrolusit chứa một kim loại mới, đồng nghiệp của ông là nhà hóa học Thụy Điển Johan Gottlieb Gahn đã khử mangan đioxit bằng than củi ở nhiệt độ cao để thu được Mangan kim loại vào năm 1774. Mangan giúp gia tăng độ cứng chịu va đập cho đường ray xe lửa, két sắt và vỏ xe bọc thép."
  },
  {
    "z": 26,
    "sym": "Fe",
    "nameEn": "Iron",
    "nameVi": "Sắt",
    "weight": "55.845(2)",
    "weightShort": "55.845",
    "cat": "transition",
    "period": 4,
    "group": "8 (VIIIB)",
    "row": 4,
    "col": 8,
    "shells": [
      2,
      8,
      14,
      2
    ],
    "config": "[Ar] 3d⁶ 4s²",
    "valence": "II, III",
    "en": "1.83",
    "ox": "+2, +3, +6",
    "discoverer": "Biết đến từ thời cổ đại",
    "year": "Cổ đại (~3000 TCN)",
    "story": "Những đồ vật bằng sắt sớm nhất của nhân loại được rèn từ thiên thạch rơi xuống Trái Đất (người Ai Cập cổ đại gọi sắt là 'kim loại từ bầu trời'). Khoảng năm 1200 TCN, kỹ thuật luyện sắt từ quặng mở ra Thời đại Đồ Sắt. Ký hiệu 'Fe' lấy từ tiếng Latinh 'Ferrum'. Sắt vừa là trụ cột của công nghiệp xây dựng (thép), vừa nằm ở tâm phân tử Hemoglobin vận chuyển oxi trong máu đỏ."
  },
  {
    "z": 27,
    "sym": "Co",
    "nameEn": "Cobalt",
    "nameVi": "Coban",
    "weight": "58.933 194(3)",
    "weightShort": "58.933",
    "cat": "transition",
    "period": 4,
    "group": "9 (VIIIB)",
    "row": 4,
    "col": 9,
    "shells": [
      2,
      8,
      15,
      2
    ],
    "config": "[Ar] 3d⁷ 4s²",
    "valence": "II, III",
    "en": "1.88",
    "ox": "+2, +3",
    "discoverer": "Georg Brandt",
    "year": "1735",
    "story": "Các thợ mỏ vùng Saxony (Đức) thời Trung cổ thường gặp một loại quặng trông giống quặng bạc nhưng khi nung lại tỏa khói độc (do chứa asen) và không thu được bạc, nên họ cho rằng yêu tinh 'Kobold' đã phù phép quặng. Năm 1735, nhà hóa học Thụy Điển Georg Brandt chứng minh màu xanh lam tuyệt đẹp của thủy tinh bắt nguồn từ một kim loại mới trong quặng đó là Coban."
  },
  {
    "z": 28,
    "sym": "Ni",
    "nameEn": "Nickel",
    "nameVi": "Niken",
    "weight": "58.6934(4)",
    "weightShort": "58.693",
    "cat": "transition",
    "period": 4,
    "group": "10 (VIIIB)",
    "row": 4,
    "col": 10,
    "shells": [
      2,
      8,
      16,
      2
    ],
    "config": "[Ar] 3d⁸ 4s²",
    "valence": "II, III",
    "en": "1.91",
    "ox": "+2, +3",
    "discoverer": "Axel Fredrik Cronstedt",
    "year": "1751",
    "story": "Năm 1751, nhà khoáng vật học Thụy Điển Axel Fredrik Cronstedt cố gắng tách đồng từ khoáng vật 'Kupfernickel' (đồng của quỷ Nick) nhưng thay vào đó lại thu được một kim loại màu trắng bạc cứng và có từ tính, nên đặt tên là Nickel. Ngày nay Niken là nguyên tố chủ chốt trong thép không gỉ, tiền xu và pin xe điện."
  },
  {
    "z": 29,
    "sym": "Cu",
    "nameEn": "Copper",
    "nameVi": "Đồng",
    "weight": "63.546(3)",
    "weightShort": "63.546",
    "cat": "transition",
    "period": 4,
    "group": "11 (IB)",
    "row": 4,
    "col": 11,
    "shells": [
      2,
      8,
      18,
      1
    ],
    "config": "[Ar] 3d¹⁰ 4s¹",
    "valence": "I, II",
    "en": "1.90",
    "ox": "+1, +2",
    "discoverer": "Biết đến từ thời tiền sử",
    "year": "Cổ đại (~9000 TCN)",
    "story": "Đồng là một trong những kim loại đầu tiên con người khai thác và chế tác cách đây hơn 10.000 năm. Khi kết hợp với Thiếc để tạo thành hợp kim đồng thau / đồng điếu, nó đã mở ra Thời đại Đồ Đồng rực rỡ (như trống đồng Đông Sơn tại Việt Nam). Tên Latinh 'Cuprum' bắt nguồn từ đảo Síp (Cyprus), nơi cung cấp phần lớn đồng cho Đế chế La Mã."
  },
  {
    "z": 30,
    "sym": "Zn",
    "nameEn": "Zinc",
    "nameVi": "Kẽm",
    "weight": "65.38(2)",
    "weightShort": "65.38",
    "cat": "transition",
    "period": 4,
    "group": "12 (IIB)",
    "row": 4,
    "col": 12,
    "shells": [
      2,
      8,
      18,
      2
    ],
    "config": "[Ar] 3d¹⁰ 4s²",
    "valence": "II",
    "en": "1.65",
    "ox": "+2",
    "discoverer": "Nhà luyện kim Ấn Độ (thế kỷ 13) / Andreas Sigismund Marggraf",
    "year": "1746",
    "story": "Hợp kim đồng thau chứa kẽm đã được dùng từ hàng ngàn năm TCN, và các nhà luyện kim Ấn Độ đã chưng cất kẽm tinh khiết từ thế kỷ 13. Tại châu Âu, nhà hóa học Đức Andreas Sigismund Marggraf được ghi nhận cô lập Kẽm vào năm 1746 bằng cách nung quặng calamin với than. Kẽm được dùng rộng rãi để mạ sắt chống gỉ và là vi chất thiết yếu cho hệ miễn dịch."
  },
  {
    "z": 31,
    "sym": "Ga",
    "nameEn": "Gallium",
    "nameVi": "Gali",
    "weight": "69.723(1)",
    "weightShort": "69.723",
    "cat": "post-transition",
    "period": 4,
    "group": "13 (IIIA)",
    "row": 4,
    "col": 13,
    "shells": [
      2,
      8,
      18,
      3
    ],
    "config": "[Ar] 3d¹⁰ 4s² 4p¹",
    "valence": "III",
    "en": "1.81",
    "ox": "+3",
    "discoverer": "Paul-Émile Lecoq de Boisbaudran",
    "year": "1875",
    "story": "Năm 1871, Mendeleev dự đoán nguyên tố 'Eka-aluminium' nằm ngay dưới Nhôm. Năm 1875, nhà hóa học Pháp Lecoq de Boisbaudran tìm thấy nguyên tố này bằng quang phổ học và đặt tên là Gallium (theo tên tiếng Latinh của nước Pháp 'Gallia'). Gali có nhiệt độ nóng chảy chỉ 29.76°C nên có thể tan chảy ngay trên lòng bàn tay người, và là vật liệu vàng trong đèn LED xanh và vi mạch bán dẫn GaAs."
  },
  {
    "z": 32,
    "sym": "Ge",
    "nameEn": "Germanium",
    "nameVi": "Gemani",
    "weight": "72.630(8)",
    "weightShort": "72.630",
    "cat": "metalloid",
    "period": 4,
    "group": "14 (IVA)",
    "row": 4,
    "col": 14,
    "shells": [
      2,
      8,
      18,
      4
    ],
    "config": "[Ar] 3d¹⁰ 4s² 4p²",
    "valence": "II, IV",
    "en": "2.01",
    "ox": "-4, +2, +4",
    "discoverer": "Clemens Winkler",
    "year": "1886",
    "story": "Được Mendeleev dự đoán cực kỳ chính xác dưới tên 'Eka-silicon'. Năm 1886, nhà hóa học Đức Clemens Winkler phân tích khoáng vật argyrodit từ một mỏ bạc ở Freiberg và tách được nguyên tố mới này, đặt tên theo quê hương Đức (Germania). Gemani chính là vật liệu tạo nên chiếc bóng bán dẫn (transistor) đầu tiên trong lịch sử năm 1947 và được dùng trong cáp quang học."
  },
  {
    "z": 33,
    "sym": "As",
    "nameEn": "Arsenic",
    "nameVi": "Asen (Thạch tín)",
    "weight": "74.921 595(6)",
    "weightShort": "74.922",
    "cat": "metalloid",
    "period": 4,
    "group": "15 (VA)",
    "row": 4,
    "col": 15,
    "shells": [
      2,
      8,
      18,
      5
    ],
    "config": "[Ar] 3d¹⁰ 4s² 4p³",
    "valence": "III, V",
    "en": "2.18",
    "ox": "-3, +3, +5",
    "discoverer": "Albertus Magnus",
    "year": "1250",
    "story": "Các khoáng vật sunfua của Asen đã được người Hy Lạp và Trung Hoa cổ đại biết đến làm thuốc nhuộm và thuốc diệt côn trùng. Học giả người Đức Albertus Magnus được ghi nhận là người đầu tiên phân lập được Asen nguyên tố vào khoảng năm 1250. Dù hợp chất As₂O₃ (thạch tín) rất độc, Asen tinh khiết ngày nay lại là nguyên tố quan trọng trong chất bán dẫn tốc độ cao Gali Asenua (GaAs)."
  },
  {
    "z": 34,
    "sym": "Se",
    "nameEn": "Selenium",
    "nameVi": "Selen",
    "weight": "78.971(8)",
    "weightShort": "78.971",
    "cat": "nonmetal",
    "period": 4,
    "group": "16 (VIA)",
    "row": 4,
    "col": 16,
    "shells": [
      2,
      8,
      18,
      6
    ],
    "config": "[Ar] 3d¹⁰ 4s² 4p⁴",
    "valence": "II, IV, VI",
    "en": "2.55",
    "ox": "-2, +2, +4, +6",
    "discoverer": "Jöns Jakob Berzelius & Johan Gottlieb Gahn",
    "year": "1817",
    "story": "Năm 1817, khi kiểm tra lớp bùn đỏ dưới đáy buồng chì sản xuất axit sunfuric tại Thụy Điển, Berzelius phát hiện một nguyên tố mới có tính chất rất giống Tellurium (vốn được đặt theo tên Trái Đất 'Tellus'). Do đó, ông đặt tên nguyên tố mới này là Selenium theo tên nữ thần Mặt Trăng 'Selene'. Selen dẫn điện mạnh hơn khi được chiếu sáng nên từng là vật liệu cốt lõi của máy photocopy và cảm biến quang."
  },
  {
    "z": 35,
    "sym": "Br",
    "nameEn": "Bromine",
    "nameVi": "Brom",
    "weight": "79.904",
    "weightShort": "79.904",
    "cat": "halogen",
    "period": 4,
    "group": "17 (VIIA)",
    "row": 4,
    "col": 17,
    "shells": [
      2,
      8,
      18,
      7
    ],
    "config": "[Ar] 3d¹⁰ 4s² 4p⁵",
    "valence": "I, III, V, VII",
    "en": "2.96",
    "ox": "-1, +1, +3, +5, +7",
    "discoverer": "Antoine Jérôme Balard & Carl Jacob Löwig",
    "year": "1825–1826",
    "story": "Brom là phi kim duy nhất tồn tại ở thể lỏng ở nhiệt độ phòng. Nó được phát hiện độc lập bởi sinh viên hóa học người Đức Carl Jacob Löwig (1825) và dược sĩ người Pháp Antoine Balard (1826) từ nước ót đầm muối. Tên gọi bắt nguồn từ chữ Hy Lạp 'bromos' (mùi hăng nồng). Hợp chất bạc bromua (AgBr) từng là nền tảng của phim ảnh truyền thống."
  },
  {
    "z": 36,
    "sym": "Kr",
    "nameEn": "Krypton",
    "nameVi": "Kripton",
    "weight": "83.798(2)",
    "weightShort": "83.798",
    "cat": "noble",
    "period": 4,
    "group": "18 (VIIIA)",
    "row": 4,
    "col": 18,
    "shells": [
      2,
      8,
      18,
      8
    ],
    "config": "[Ar] 3d¹⁰ 4s² 4p⁶",
    "valence": "0 (Hợp chất hiếm: II)",
    "en": "3.00",
    "ox": "0, +2",
    "discoverer": "William Ramsay & Morris Travers",
    "year": "1898",
    "story": "Chiều ngày 30/5/1898, sau khi cho bay hơi gần hết một mẫu không khí lỏng tại Luân Đôn, William Ramsay và Morris Travers phát hiện các vạch quang phổ màu lục và vàng sáng chói của một khí hiếm mới ẩn giấu trong phần cặn. Họ đặt tên là Krypton từ chữ Hy Lạp 'kryptos' nghĩa là 'ẩn giấu'. Từ năm 1960 đến 1983, độ dài 1 mét chuẩn quốc tế được định nghĩa theo bước sóng vạch phổ cam-đỏ của đồng vị Krypton-86."
  },
  {
    "z": 37,
    "sym": "Rb",
    "nameEn": "Rubidium",
    "nameVi": "Rubiđi",
    "weight": "85.4678(3)",
    "weightShort": "85.468",
    "cat": "alkali",
    "period": 5,
    "group": "1 (IA)",
    "row": 5,
    "col": 1,
    "shells": [
      2,
      8,
      18,
      8,
      1
    ],
    "config": "[Kr] 5s¹",
    "valence": "I",
    "en": "0.82",
    "ox": "+1",
    "discoverer": "Robert Bunsen & Gustav Kirchhoff",
    "year": "1861",
    "story": "Năm 1861, nhà hóa học Robert Bunsen và nhà vật lý Gustav Kirchhoff dùng chính máy quang phổ do họ vừa phát minh để phân tích khoáng vật lepidolit và phát hiện hai vạch phổ màu đỏ thẫm chưa từng thấy. Họ đặt tên nguyên tố mới là Rubidium (từ chữ Latinh 'rubidus' nghĩa là màu đỏ thẫm). Ngày nay đồng hồ nguyên tử Rubiđi giúp định vị GPS chính xác đến từng phần tỷ giây."
  },
  {
    "z": 38,
    "sym": "Sr",
    "nameEn": "Strontium",
    "nameVi": "Stronti",
    "weight": "87.62(1)",
    "weightShort": "87.62",
    "cat": "alkaline",
    "period": 5,
    "group": "2 (IIA)",
    "row": 5,
    "col": 2,
    "shells": [
      2,
      8,
      18,
      8,
      2
    ],
    "config": "[Kr] 5s²",
    "valence": "II",
    "en": "0.95",
    "ox": "+2",
    "discoverer": "Adair Crawford & William Cruickshank (phân lập: Humphry Davy)",
    "year": "1790 / 1808",
    "story": "Năm 1790, bác sĩ Adair Crawford phát hiện một khoáng vật lạ trong mỏ chì gần ngôi làng Strontian ở vùng cao nguyên Scotland, và đến năm 1808 Humphry Davy cô lập được kim loại Stronti bằng điện phân. Các muối Stronti cháy tạo ra ánh sáng đỏ thẫm rực rỡ nên là thành phần chính tạo màu đỏ cho pháo hoa lễ hội."
  },
  {
    "z": 39,
    "sym": "Y",
    "nameEn": "Yttrium",
    "nameVi": "Ytri",
    "weight": "88.905 84(1)",
    "weightShort": "88.906",
    "cat": "transition",
    "period": 5,
    "group": "3 (IIIB)",
    "row": 5,
    "col": 3,
    "shells": [
      2,
      8,
      18,
      9,
      2
    ],
    "config": "[Kr] 4d¹ 5s²",
    "valence": "III",
    "en": "1.22",
    "ox": "+3",
    "discoverer": "Johan Gadolin",
    "year": "1794",
    "story": "Năm 1787, trung úy Carl Axel Arrhenius nhặt được một viên đá đen nặng bất thường tại mỏ đá làng Ytterby (Thụy Điển). Năm 1794, giáo sư phần Lan Johan Gadolin phân tích viên đá và phát hiện ra oxit của nguyên tố đất hiếm đầu tiên, đặt tên là Yttrium theo tên làng Ytterby (ngôi làng nổi tiếng nhất lịch sử hóa học khi có tới 4 nguyên tố được đặt theo tên nó: Yttrium, Ytterbium, Terbium, Erbium)."
  },
  {
    "z": 40,
    "sym": "Zr",
    "nameEn": "Zirconium",
    "nameVi": "Ziconi",
    "weight": "91.224(2)",
    "weightShort": "91.224",
    "cat": "transition",
    "period": 5,
    "group": "4 (IVB)",
    "row": 5,
    "col": 4,
    "shells": [
      2,
      8,
      18,
      10,
      2
    ],
    "config": "[Kr] 4d² 5s²",
    "valence": "IV",
    "en": "1.33",
    "ox": "+4",
    "discoverer": "Martin Heinrich Klaproth (phân lập: Jöns Jakob Berzelius)",
    "year": "1789 / 1824",
    "story": "Đá quý zircon đã được biết đến từ thời Kinh Thánh, nhưng đến năm 1789 nhà hóa học Đức Martin Heinrich Klaproth mới chứng minh nó chứa oxit của một kim loại mới và đặt tên là Zirconium (từ tiếng Ba Tư 'zargun' nghĩa là màu vàng kim). Nhờ không hấp thụ neutron nhiệt và chống ăn mòn tuyệt vời, Ziconi là vật liệu bọc thanh nhiên liệu trong các lò phản ứng hạt nhân."
  },
  {
    "z": 41,
    "sym": "Nb",
    "nameEn": "Niobium",
    "nameVi": "Niobi",
    "weight": "92.906 37(1)",
    "weightShort": "92.906",
    "cat": "transition",
    "period": 5,
    "group": "5 (VB)",
    "row": 5,
    "col": 5,
    "shells": [
      2,
      8,
      18,
      12,
      1
    ],
    "config": "[Kr] 4d⁴ 5s¹",
    "valence": "III, V",
    "en": "1.6",
    "ox": "+3, +5",
    "discoverer": "Charles Hatchett & Heinrich Rose",
    "year": "1801 / 1844",
    "story": "Năm 1801, nhà hóa học Anh Charles Hatchett tìm thấy một nguyên tố mới trong mẫu quặng gửi từ Mỹ và gọi là 'Columbium'. Năm 1844, nhà hóa học Đức Heinrich Rose chứng minh quặng columbite chứa hai nguyên tố rất giống nhau là Tantalum và một nguyên tố thứ hai mà ông đặt tên là Niobium (theo tên Niobe, con gái của vua Tantalus trong thần thoại Hy Lạp). Năm 1949, IUPAC chính thức chọn tên Niobium."
  },
  {
    "z": 42,
    "sym": "Mo",
    "nameEn": "Molybdenum",
    "nameVi": "Molipđen",
    "weight": "95.95(1)",
    "weightShort": "95.95",
    "cat": "transition",
    "period": 5,
    "group": "6 (VIB)",
    "row": 5,
    "col": 6,
    "shells": [
      2,
      8,
      18,
      13,
      1
    ],
    "config": "[Kr] 4d⁵ 5s¹",
    "valence": "II, III, IV, V, VI",
    "en": "2.16",
    "ox": "+2, +3, +4, +5, +6",
    "discoverer": "Carl Wilhelm Scheele (phân lập: Peter Jacob Hjelm)",
    "year": "1778 / 1781",
    "story": "Khoáng vật molybdenit (MoS₂) mềm và đen bóng nên suốt nhiều thế kỷ bị nhầm với quặng chì và than chì (từ chữ Hy Lạp 'molybdos' nghĩa là chì). Năm 1778, Carl Wilhelm Scheele chứng minh đó là khoáng vật của một nguyên tố hoàn toàn mới, và bạn ông là Peter Jacob Hjelm đã tách được kim loại Molipđen vào năm 1781. Nó có nhiệt độ nóng chảy rất cao (2623°C) và là vi chất thiết yếu cho các enzyme cố định đạm ở thực vật."
  },
  {
    "z": 43,
    "sym": "Tc",
    "nameEn": "Technetium",
    "nameVi": "Tecnexi",
    "weight": "[97]",
    "weightShort": "[97]",
    "cat": "transition",
    "period": 5,
    "group": "7 (VIIB)",
    "row": 5,
    "col": 7,
    "shells": [
      2,
      8,
      18,
      13,
      2
    ],
    "config": "[Kr] 4d⁵ 5s²",
    "valence": "IV, VI, VII",
    "en": "1.9",
    "ox": "+4, +6, +7",
    "discoverer": "Carlo Perrier & Emilio Segrè",
    "year": "1937",
    "story": "Ô số 43 ('Eka-manganese') trong bảng tuần hoàn của Mendeleev bị bỏ trống suốt gần 70 năm vì mọi đồng vị của nó đều phóng xạ và không bền trong tự nhiên. Năm 1937, hai nhà khoa học Ý Carlo Perrier và Emilio Segrè tìm thấy nguyên tố số 43 trong tấm lá molipđen đã được bắn phá bằng hạt nhân đơteri trong máy gia tốc tại Berkeley (Mỹ). Nó trở thành nguyên tố nhân tạo đầu tiên và được đặt tên là Technetium (từ chữ Hy Lạp 'technetos' nghĩa là nhân tạo)."
  },
  {
    "z": 44,
    "sym": "Ru",
    "nameEn": "Ruthenium",
    "nameVi": "Ruteni",
    "weight": "101.07(2)",
    "weightShort": "101.07",
    "cat": "transition",
    "period": 5,
    "group": "8 (VIIIB)",
    "row": 5,
    "col": 8,
    "shells": [
      2,
      8,
      18,
      15,
      1
    ],
    "config": "[Kr] 4d⁷ 5s¹",
    "valence": "III, IV, VIII",
    "en": "2.2",
    "ox": "+2, +3, +4, +6, +8",
    "discoverer": "Karl Ernst Claus",
    "year": "1844",
    "story": "Năm 1844, giáo sư hóa học người Nga gốc Đức Karl Ernst Claus tại Đại học Kazan đã tách được một kim loại quý mới từ cặn quặng bạch kim vùng núi Ural. Ông đặt tên là Ruthenium theo chữ Latinh 'Ruthenia' (tên cổ của vùng Nga) để vinh danh quê hương mình. Ruteni giúp làm cứng hợp kim bạch kim và là chất xúc tác quan trọng trong công nghiệp hóa chất."
  },
  {
    "z": 45,
    "sym": "Rh",
    "nameEn": "Rhodium",
    "nameVi": "Rođi",
    "weight": "102.905 49(2)",
    "weightShort": "102.91",
    "cat": "transition",
    "period": 5,
    "group": "9 (VIIIB)",
    "row": 5,
    "col": 9,
    "shells": [
      2,
      8,
      18,
      16,
      1
    ],
    "config": "[Kr] 4d⁸ 5s¹",
    "valence": "III",
    "en": "2.28",
    "ox": "+3",
    "discoverer": "William Hyde Wollaston",
    "year": "1803",
    "story": "Năm 1803, nhà hóa học Anh William Hyde Wollaston hòa tan quặng bạch kim thô từ Nam Mỹ trong nước cường toan và thu được dung dịch muối có màu hồng đỏ tuyệt đẹp. Từ đó ông đặt tên nguyên tố mới là Rhodium (từ tiếng Hy Lạp 'rhodon' nghĩa là hoa hồng). Đây là một trong những kim loại quý hiếm và đắt giá nhất thế giới, không thể thiếu trong bộ chuyển đổi xúc tác khí thải ô tô."
  },
  {
    "z": 46,
    "sym": "Pd",
    "nameEn": "Palladium",
    "nameVi": "Palađi",
    "weight": "106.42(1)",
    "weightShort": "106.42",
    "cat": "transition",
    "period": 5,
    "group": "10 (VIIIB)",
    "row": 5,
    "col": 10,
    "shells": [
      2,
      8,
      18,
      18
    ],
    "config": "[Kr] 4d¹⁰",
    "valence": "II, IV",
    "en": "2.20",
    "ox": "+2, +4",
    "discoverer": "William Hyde Wollaston",
    "year": "1803",
    "story": "Khi tinh chế quặng bạch kim vào năm 1802–1803, William Hyde Wollaston tách được Palađi và đặt tên theo tiểu hành tinh Pallas (nữ thần trí tuệ Pallas Athena) vừa được phát hiện năm 1802. Palađi có khả năng kỳ diệu là hấp thụ thể tích khí Hiđro gấp tới 900 lần thể tích của chính nó ở nhiệt độ thường như một miếng bọt biển kim loại, và là chất xúc tác giành giải Nobel Hóa học 2010."
  },
  {
    "z": 47,
    "sym": "Ag",
    "nameEn": "Silver",
    "nameVi": "Bạc",
    "weight": "107.8682(2)",
    "weightShort": "107.87",
    "cat": "transition",
    "period": 5,
    "group": "11 (IB)",
    "row": 5,
    "col": 11,
    "shells": [
      2,
      8,
      18,
      18,
      1
    ],
    "config": "[Kr] 4d¹⁰ 5s¹",
    "valence": "I",
    "en": "1.93",
    "ox": "+1",
    "discoverer": "Biết đến từ thời cổ đại",
    "year": "Cổ đại (~4000 TCN)",
    "story": "Bạc được loài người khai thác và sử dụng từ thiên niên kỷ thứ 4 TCN tại vùng Tiểu Á để làm đồ trang sức, tiền tệ và bình chứa nước kháng khuẩn. Ký hiệu hóa học 'Ag' bắt nguồn từ tiếng Latinh 'Argentum' (sáng trắng). Bạc là kim loại có độ dẫn điện, dẫn nhiệt và phản xạ ánh sáng cao nhất trong toàn bộ bảng tuần hoàn."
  },
  {
    "z": 48,
    "sym": "Cd",
    "nameEn": "Cadmium",
    "nameVi": "Cađimi",
    "weight": "112.414(4)",
    "weightShort": "112.41",
    "cat": "transition",
    "period": 5,
    "group": "12 (IIB)",
    "row": 5,
    "col": 12,
    "shells": [
      2,
      8,
      18,
      18,
      2
    ],
    "config": "[Kr] 4d¹⁰ 5s²",
    "valence": "II",
    "en": "1.69",
    "ox": "+2",
    "discoverer": "Friedrich Stromeyer & Karl Samuel Leberecht Hermann",
    "year": "1817",
    "story": "Năm 1817 tại Đức, thanh tra dược phẩm Friedrich Stromeyer điều tra lý do vì sao một số lô thuốc kẽm cacbonat (calamin) chuyển sang màu vàng khi đun nóng dù không chứa sắt. Ông phát hiện ra tạp chất đó là oxit của một kim loại mới và đặt tên là Cadmium (từ 'cadmia', tên cổ tiếng Hy Lạp của quặng kẽm calamin)."
  },
  {
    "z": 49,
    "sym": "In",
    "nameEn": "Indium",
    "nameVi": "Inđi",
    "weight": "114.818(1)",
    "weightShort": "114.82",
    "cat": "post-transition",
    "period": 5,
    "group": "13 (IIIA)",
    "row": 5,
    "col": 13,
    "shells": [
      2,
      8,
      18,
      18,
      3
    ],
    "config": "[Kr] 4d¹⁰ 5s² 5p¹",
    "valence": "III",
    "en": "1.78",
    "ox": "+3",
    "discoverer": "Ferdinand Reich & Hieronymus Theodor Richter",
    "year": "1863",
    "story": "Năm 1863, nhà vật lý Đức Ferdinand Reich kiểm tra quặng kẽm để tìm Thallium. Do bị mù màu, ông nhờ trợ lý Hieronymus Richter quan sát máy quang phổ. Richter nhìn thấy một vạch phổ màu chàm (indigo) sáng rực chưa từng được biết đến, và hai ông đã phân lập thành công kim loại mềm này. Hợp chất Indium Tin Oxide (ITO) trong suốt và dẫn điện chính là lớp cảm ứng trên mọi màn hình điện thoại thông minh hiện nay."
  },
  {
    "z": 50,
    "sym": "Sn",
    "nameEn": "Tin",
    "nameVi": "Thiếc",
    "weight": "118.710(7)",
    "weightShort": "118.71",
    "cat": "post-transition",
    "period": 5,
    "group": "14 (IVA)",
    "row": 5,
    "col": 14,
    "shells": [
      2,
      8,
      18,
      18,
      4
    ],
    "config": "[Kr] 4d¹⁰ 5s² 5p²",
    "valence": "II, IV",
    "en": "1.96",
    "ox": "-4, +2, +4",
    "discoverer": "Biết đến từ thời cổ đại",
    "year": "Cổ đại (~3500 TCN)",
    "story": "Thiếc được sử dụng từ khoảng năm 3500 TCN để luyện cùng Đồng tạo ra đồng điếu, mở đầu cho Thời đại Đồ Đồng. Ký hiệu 'Sn' bắt nguồn từ tên tiếng Latinh 'Stannum'. Khi uốn một thanh thiếc nguyên chất, các tinh thể trượt lên nhau phát ra âm thanh răng rắc đặc trưng gọi là 'tiếng kêu của thiếc' (tin cry)."
  },
  {
    "z": 51,
    "sym": "Sb",
    "nameEn": "Antimony",
    "nameVi": "Antimon",
    "weight": "121.760(1)",
    "weightShort": "121.76",
    "cat": "metalloid",
    "period": 5,
    "group": "15 (VA)",
    "row": 5,
    "col": 15,
    "shells": [
      2,
      8,
      18,
      18,
      5
    ],
    "config": "[Kr] 4d¹⁰ 5s² 5p³",
    "valence": "III, V",
    "en": "2.05",
    "ox": "-3, +3, +5",
    "discoverer": "Biết đến từ thời cổ đại (Vannoccio Biringuccio mô tả)",
    "year": "Cổ đại (1540)",
    "story": "Khoáng vật stibnit (Sb₂S₃) màu đen đã được phụ nữ Ai Cập cổ đại nghiền mịn làm phấn kẻ mắt từ hơn 5000 năm trước. Từ 'Stibium' trong tiếng Latinh đã tạo nên ký hiệu hóa học 'Sb'. Nhà luyện kim Ý Vannoccio Biringuccio mô tả quy trình tách Antimon kim loại chi tiết vào năm 1540. Antimon được dùng trong hợp kim chữ in, ắc quy chì và vật liệu chống cháy."
  },
  {
    "z": 52,
    "sym": "Te",
    "nameEn": "Tellurium",
    "nameVi": "Telu",
    "weight": "127.60(3)",
    "weightShort": "127.60",
    "cat": "metalloid",
    "period": 5,
    "group": "16 (VIA)",
    "row": 5,
    "col": 16,
    "shells": [
      2,
      8,
      18,
      18,
      6
    ],
    "config": "[Kr] 4d¹⁰ 5s² 5p⁴",
    "valence": "II, IV, VI",
    "en": "2.1",
    "ox": "-2, +2, +4, +6",
    "discoverer": "Franz-Joseph Müller von Reichenstein",
    "year": "1782",
    "story": "Năm 1782 tại Transylvania, kỹ sư trưởng mỏ vàng Franz-Joseph Müller von Reichenstein chiết xuất được một á kim ánh bạc từ quặng vàng bất thường. Năm 1798, Martin Heinrich Klaproth xác nhận đây là nguyên tố mới và đặt tên là Tellurium (từ tiếng Latinh 'tellus' nghĩa là Trái Đất). Ngày nay Telu rất quan trọng trong tấm pin mặt trời màng mỏng CdTe."
  },
  {
    "z": 53,
    "sym": "I",
    "nameEn": "Iodine",
    "nameVi": "Iốt",
    "weight": "126.904 47(3)",
    "weightShort": "126.90",
    "cat": "halogen",
    "period": 5,
    "group": "17 (VIIA)",
    "row": 5,
    "col": 17,
    "shells": [
      2,
      8,
      18,
      18,
      7
    ],
    "config": "[Kr] 4d¹⁰ 5s² 5p⁵",
    "valence": "I, III, V, VII",
    "en": "2.66",
    "ox": "-1, +1, +3, +5, +7",
    "discoverer": "Bernard Courtois",
    "year": "1811",
    "story": "Năm 1811, trong thời kỳ chiến tranh Napoléon, nhà sản xuất diêm tiêu người Pháp Bernard Courtois vô tình đổ quá nhiều axit sunfuric vào tro rong biển. Một làn hơi màu tím tuyệt đẹp bốc lên và ngưng tụ thành những tinh thể đen ánh kim. Năm 1813, Gay-Lussac đặt tên nguyên tố mới là Iode (từ tiếng Hy Lạp 'ioeides' nghĩa là màu tím). Iốt là vi chất thiết yếu để tuyến giáp tổng hợp hormone."
  },
  {
    "z": 54,
    "sym": "Xe",
    "nameEn": "Xenon",
    "nameVi": "Xenon",
    "weight": "131.293(6)",
    "weightShort": "131.29",
    "cat": "noble",
    "period": 5,
    "group": "18 (VIIIA)",
    "row": 5,
    "col": 18,
    "shells": [
      2,
      8,
      18,
      18,
      8
    ],
    "config": "[Kr] 4d¹⁰ 5s² 5p⁶",
    "valence": "0 (Hợp chất: II, IV, VI, VIII)",
    "en": "2.60",
    "ox": "0, +2, +4, +6, +8",
    "discoverer": "William Ramsay & Morris Travers",
    "year": "1898",
    "story": "Được Ramsay và Travers tìm thấy vào tháng 7/1898 ngay sau Krypton và Neon trong phần cặn nặng nhất của không khí hóa lỏng. Tên gọi bắt nguồn từ chữ Hy Lạp 'xenos' (kẻ xa lạ / khách lạ). Năm 1962, nhà hóa học Neil Bartlett đã tổng hợp thành công hợp chất khí hiếm đầu tiên (XePtF₆), phá vỡ định kiến suốt nửa thế kỷ rằng khí hiếm hoàn toàn không thể tạo hợp chất hóa học."
  },
  {
    "z": 55,
    "sym": "Cs",
    "nameEn": "Caesium",
    "nameVi": "Xêzi",
    "weight": "132.905 451 96(6)",
    "weightShort": "132.91",
    "cat": "alkali",
    "period": 6,
    "group": "1 (IA)",
    "row": 6,
    "col": 1,
    "shells": [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "config": "[Xe] 6s¹",
    "valence": "I",
    "en": "0.79",
    "ox": "+1",
    "discoverer": "Robert Bunsen & Gustav Kirchhoff",
    "year": "1860",
    "story": "Năm 1860, Bunsen và Kirchhoff phát hiện Xêzi trong nước khoáng Dürkheim (Đức) nhờ hai vạch quang phổ màu xanh da trời sáng rực, khiến nó trở thành nguyên tố đầu tiên trong lịch sử được tìm ra bằng phương pháp phân tích quang phổ. Tên gọi lấy từ chữ Latinh 'caesius' (xanh da trời). Đồng hồ nguyên tử Caesium-133 hiện là chuẩn quốc tế định nghĩa đơn vị giây (1 giây = 9.192.631.770 chu kỳ bức xạ của Cs-133)."
  },
  {
    "z": 56,
    "sym": "Ba",
    "nameEn": "Barium",
    "nameVi": "Bari",
    "weight": "137.327(7)",
    "weightShort": "137.33",
    "cat": "alkaline",
    "period": 6,
    "group": "2 (IIA)",
    "row": 6,
    "col": 2,
    "shells": [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "config": "[Xe] 6s²",
    "valence": "II",
    "en": "0.89",
    "ox": "+2",
    "discoverer": "Carl Wilhelm Scheele (nhận diện) / Humphry Davy (phân lập)",
    "year": "1774 / 1808",
    "story": "Đầu thế kỷ 17, một thợ đóng giày ở Bologna (Ý) phát hiện những viên đá nặng (quặng barit, BaSO₄) phát sáng sau khi nung nóng dưới ánh nắng. Scheele phân biệt được oxit bari vào năm 1774 và Humphry Davy cô lập kim loại Bari bằng điện phân năm 1808. Tên gọi xuất phát từ tiếng Hy Lạp 'barys' (nặng). Muối BaSO₄ cản tia X rất tốt nên được dùng làm 'bữa ăn bari' chụp X-quang đường tiêu hóa."
  },
  {
    "z": 57,
    "sym": "La",
    "nameEn": "Lanthanum",
    "nameVi": "Lantan",
    "weight": "138.905 47(7)",
    "weightShort": "138.91",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 4,
    "shells": [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "config": "[Xe] 5d¹ 6s²",
    "valence": "III",
    "en": "1.10",
    "ox": "+3",
    "discoverer": "Carl Gustaf Mosander",
    "year": "1839",
    "story": "Năm 1839 tại Stockholm, nhà hóa học Thụy Điển Carl Gustaf Mosander phân hủy mẫu ceri nitrat bằng cách nung và xử lý với axit nitric loãng, phát hiện một oxit đất hiếm mới ẩn bên trong. Ông đặt tên là Lanthanum từ chữ Hy Lạp 'lanthanein' (nằm ẩn giấu). Lantan mở đầu cho dãy 15 nguyên tố Họ Lantan và được dùng nhiều trong thấu kính máy ảnh cao cấp."
  },
  {
    "z": 58,
    "sym": "Ce",
    "nameEn": "Cerium",
    "nameVi": "Xeri",
    "weight": "140.116(1)",
    "weightShort": "140.12",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 5,
    "shells": [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "config": "[Xe] 4f¹ 5d¹ 6s²",
    "valence": "III, IV",
    "en": "1.12",
    "ox": "+3, +4",
    "discoverer": "Jöns Jakob Berzelius, Wilhelm Hisinger & Martin Heinrich Klaproth",
    "year": "1803",
    "story": "Được phát hiện đồng thời năm 1803 bởi Berzelius và Hisinger tại Thụy Điển cùng Klaproth tại Đức. Nó được đặt tên theo hành tinh lùn Ceres (nữ thần nông nghiệp La Mã) vừa được phát hiện năm 1801. Xeri là nguyên tố đất hiếm phổ biến nhất trong vỏ Trái Đất, có mặt trong đá lửa bật lửa (hợp kim ferrocerium) phát tia lửa khi ma sát."
  },
  {
    "z": 59,
    "sym": "Pr",
    "nameEn": "Praseodymium",
    "nameVi": "Praseođim",
    "weight": "140.907 66(1)",
    "weightShort": "140.91",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 6,
    "shells": [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "config": "[Xe] 4f³ 6s²",
    "valence": "III, IV",
    "en": "1.13",
    "ox": "+3, +4",
    "discoverer": "Carl Auer von Welsbach",
    "year": "1885",
    "story": "Năm 1841, Mosander tách được một chất mà ông gọi là 'Didymium' (cặp song sinh) và tưởng là một nguyên tố. Hơn 40 năm sau (1885), nhà hóa học Áo Carl Auer von Welsbach dùng phương pháp kết tinh phân đoạn hàng trăm lần để tách 'Didymium' thành hai nguyên tố riêng biệt: Praseodymium ('song sinh màu xanh tỏi tây' do tạo muối màu lục) và Neodymium."
  },
  {
    "z": 60,
    "sym": "Nd",
    "nameEn": "Neodymium",
    "nameVi": "Neođim",
    "weight": "144.242(3)",
    "weightShort": "144.24",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 7,
    "shells": [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "config": "[Xe] 4f⁴ 6s²",
    "valence": "III",
    "en": "1.14",
    "ox": "+3",
    "discoverer": "Carl Auer von Welsbach",
    "year": "1885",
    "story": "Cùng được Carl Auer von Welsbach tách ra từ 'Didymium' vào năm 1885 tại Viên (Áo), tên gọi Neodymium có nghĩa là 'người anh em song sinh mới' (từ tiếng Hy Lạp 'neos' và 'didymos'). Neođim kết hợp với Sắt và Bo tạo ra loại nam châm vĩnh cửu mạnh nhất thế giới hiện nay (Nd₂Fe₁₄B), dùng trong tai nghe, ổ cứng, tua-bin điện gió và động cơ xe điện."
  },
  {
    "z": 61,
    "sym": "Pm",
    "nameEn": "Promethium",
    "nameVi": "Prometi",
    "weight": "[145]",
    "weightShort": "[145]",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 8,
    "shells": [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "config": "[Xe] 4f⁵ 6s²",
    "valence": "III",
    "en": "1.13",
    "ox": "+3",
    "discoverer": "Jacob A. Marinsky, Lawrence E. Glendenin & Charles D. Coryell",
    "year": "1945",
    "story": "Là nguyên tố duy nhất trong Họ Lantan không có đồng vị bền tự nhiên. Năm 1945 tại Phòng thí nghiệm Quốc gia Oak Ridge (Mỹ), Marinsky, Glendenin và Coryell đã tách được nguyên tố số 61 từ sản phẩm phân hạch nhiên liệu urani. Tên gọi Promethium (theo thần Prometheus người đã đánh cắp lửa từ thiên đàng trao cho loài người) do vợ của Coryell đề xuất để nhắc nhở cả sức mạnh lẫn hiểm họa của năng lượng hạt nhân."
  },
  {
    "z": 62,
    "sym": "Sm",
    "nameEn": "Samarium",
    "nameVi": "Samari",
    "weight": "150.36(2)",
    "weightShort": "150.36",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 9,
    "shells": [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "config": "[Xe] 4f⁶ 6s²",
    "valence": "II, III",
    "en": "1.17",
    "ox": "+2, +3",
    "discoverer": "Paul-Émile Lecoq de Boisbaudran",
    "year": "1879",
    "story": "Năm 1879 tại Paris, Lecoq de Boisbaudran phân lập được oxit của nguyên tố mới từ khoáng vật samarskit. Khoáng vật này lại được đặt theo tên đại tá kỹ sư mỏ người Nga Vasili Samarsky-Bykhovets — khiến ông trở thành người đầu tiên trong lịch sử có một nguyên tố hóa học mang tên mình. Nam châm Samari-Coban (SmCo) nổi tiếng với khả năng giữ từ tính ở nhiệt độ rất cao."
  },
  {
    "z": 63,
    "sym": "Eu",
    "nameEn": "Europium",
    "nameVi": "Europi",
    "weight": "151.964(1)",
    "weightShort": "151.96",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 10,
    "shells": [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "config": "[Xe] 4f⁷ 6s²",
    "valence": "II, III",
    "en": "1.2",
    "ox": "+2, +3",
    "discoverer": "Eugène-Anatole Demarçay",
    "year": "1901",
    "story": "Sau quá trình kết tinh phân đoạn vô cùng kiên nhẫn từ mẫu magie-samari nitrat, nhà hóa học Pháp Eugène-Anatole Demarçay đã cô lập được nguyên tố số 63 vào năm 1901 và đặt tên theo châu lục châu Âu (Europe). Hợp chất của Europi phát quang màu đỏ và xanh lam rực rỡ dưới tia cực tím nên được dùng trong màn hình màu và mực in chống tiền giả trên tờ tiền Euro."
  },
  {
    "z": 64,
    "sym": "Gd",
    "nameEn": "Gadolinium",
    "nameVi": "Gađolini",
    "weight": "157.25(3)",
    "weightShort": "157.25",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 11,
    "shells": [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "config": "[Xe] 4f⁷ 5d¹ 6s²",
    "valence": "III",
    "en": "1.20",
    "ox": "+3",
    "discoverer": "Jean Charles Galissard de Marignac & Paul-Émile Lecoq de Boisbaudran",
    "year": "1880 / 1886",
    "story": "Năm 1880, nhà hóa học Thụy Sĩ de Marignac quan sát thấy các vạch quang phổ của một nguyên tố mới trong khoáng vật gadolinit, và đến năm 1886 Lecoq de Boisbaudran tách được nó, đặt tên nhằm vinh danh nhà hóa học Phần Lan Johan Gadolin (người tiên phong nghiên cứu đất hiếm). Nhờ có 7 electron độc thân ở phân lớp 4f, Gađolini có tính thuận từ rất mạnh và được dùng làm chất tương phản trong chụp cộng hưởng từ (MRI)."
  },
  {
    "z": 65,
    "sym": "Tb",
    "nameEn": "Terbium",
    "nameVi": "Tebi",
    "weight": "158.925 354(8)",
    "weightShort": "158.93",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 12,
    "shells": [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "config": "[Xe] 4f⁹ 6s²",
    "valence": "III, IV",
    "en": "1.2",
    "ox": "+3, +4",
    "discoverer": "Carl Gustaf Mosander",
    "year": "1843",
    "story": "Năm 1843, nhà hóa học Thụy Điển Carl Gustaf Mosander phân tách mẫu quặng yttria từ làng Ytterby thành ba phần riêng biệt: yttria, erbia và terbia. Từ đó hai nguyên tố mới là Terbium và Erbium ra đời, cùng mang tên ngôi làng Ytterby. Hợp chất của Tebi phát ánh sáng huỳnh quang màu xanh lục cực sáng trên màn hình hiển thị và bóng đèn tiết kiệm điện."
  },
  {
    "z": 66,
    "sym": "Dy",
    "nameEn": "Dysprosium",
    "nameVi": "Đisprozi",
    "weight": "162.500(1)",
    "weightShort": "162.50",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 13,
    "shells": [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "config": "[Xe] 4f¹⁰ 6s²",
    "valence": "III",
    "en": "1.22",
    "ox": "+3",
    "discoverer": "Paul-Émile Lecoq de Boisbaudran",
    "year": "1886",
    "story": "Năm 1886 tại Paris, nhà hóa học Lecoq de Boisbaudran phải thực hiện hơn 30 lần kết tinh phân đoạn đầy gian nan mới tách được nguyên tố này ra khỏi oxit holmi. Vì quá khó tách, ông đặt tên là Dysprosium từ chữ Hy Lạp 'dysprositos' nghĩa là 'khó tiếp cận / khó đạt được'. Nó được pha vào nam châm xe điện để chống mất từ tính ở nhiệt độ cao."
  },
  {
    "z": 67,
    "sym": "Ho",
    "nameEn": "Holmium",
    "nameVi": "Honmi",
    "weight": "164.930 328(7)",
    "weightShort": "164.93",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 14,
    "shells": [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "config": "[Xe] 4f¹¹ 6s²",
    "valence": "III",
    "en": "1.23",
    "ox": "+3",
    "discoverer": "Marc Delafontaine, Jacques-Louis Soret & Per Teodor Cleve",
    "year": "1878",
    "story": "Được phát hiện độc lập năm 1878 bởi hai nhà khoa học Thụy Sĩ Delafontaine và Soret (qua quang phổ) cùng nhà hóa học Thụy Điển Per Teodor Cleve. Cleve đặt tên nguyên tố là Holmium theo tên tiếng Latinh của thủ đô Stockholm ('Holmia') quê hương ông. Honmi là nguyên tố tự nhiên có mômen từ lớn nhất và được dùng trong laser phẫu thuật y khoa."
  },
  {
    "z": 68,
    "sym": "Er",
    "nameEn": "Erbium",
    "nameVi": "Ecbi",
    "weight": "167.259(3)",
    "weightShort": "167.26",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 15,
    "shells": [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "config": "[Xe] 4f¹² 6s²",
    "valence": "III",
    "en": "1.24",
    "ox": "+3",
    "discoverer": "Carl Gustaf Mosander",
    "year": "1843",
    "story": "Được Carl Gustaf Mosander tìm ra năm 1843 cùng lúc với Terbium từ quặng gadolinit của làng Ytterby (Thụy Điển). Các ion Er³⁺ có màu hồng phấn tự nhiên rất đẹp dùng tạo màu cho thủy tinh và gốm sứ, đồng thời bộ khuếch đại sợi quang pha tạp Erbium (EDFA) chính là xương sống truyền tín hiệu Internet cáp quang xuyên đại dương."
  },
  {
    "z": 69,
    "sym": "Tm",
    "nameEn": "Thulium",
    "nameVi": "Tuli",
    "weight": "168.934 218(6)",
    "weightShort": "168.93",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 16,
    "shells": [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "config": "[Xe] 4f¹³ 6s²",
    "valence": "II, III",
    "en": "1.25",
    "ox": "+2, +3",
    "discoverer": "Per Teodor Cleve",
    "year": "1879",
    "story": "Năm 1879, khi loại bỏ hết tạp chất khỏi mẫu erbia, nhà hóa học Thụy Điển Per Teodor Cleve thu được hai chất mới: một màu nâu (Holmium) và một màu lục nhạt mà ông đặt tên là Thulium — theo chữ 'Thule', tên gọi cổ xưa trong thần thoại Hy Lạp-La Mã chỉ vùng đất cực Bắc xa xôi Scandinavia. Đây là nguyên tố ít phổ biến nhất trong các đất hiếm bền."
  },
  {
    "z": 70,
    "sym": "Yb",
    "nameEn": "Ytterbium",
    "nameVi": "Ytecbi",
    "weight": "173.045(10)",
    "weightShort": "173.05",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 17,
    "shells": [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "config": "[Xe] 4f¹⁴ 6s²",
    "valence": "II, III",
    "en": "1.1",
    "ox": "+2, +3",
    "discoverer": "Jean Charles Galissard de Marignac",
    "year": "1878",
    "story": "Năm 1878, nhà hóa học Thụy Sĩ de Marignac đun nóng erbia nitrat cho đến khi phân hủy và tách được những tinh thể trắng của một nguyên tố mới, đặt tên là Ytterbium (nguyên tố thứ tư mang tên làng Ytterby của Thụy Điển). Đồng hồ mạng quang học dùng nguyên tử Ytecbi hiện đạt độ chính xác kỷ lục thế giới, sai số chưa tới 1 giây trong hàng tỷ năm."
  },
  {
    "z": 71,
    "sym": "Lu",
    "nameEn": "Lutetium",
    "nameVi": "Lutexi",
    "weight": "174.9668(1)",
    "weightShort": "174.97",
    "cat": "lanthanide",
    "period": 6,
    "group": "Họ Lantan (IIIB)",
    "row": 9,
    "col": 18,
    "shells": [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d¹ 6s²",
    "valence": "III",
    "en": "1.27",
    "ox": "+3",
    "discoverer": "Georges Urbain, Carl Auer von Welsbach & Charles James",
    "year": "1907",
    "story": "Năm 1907, ba nhà hóa học Georges Urbain (Pháp), Carl Auer von Welsbach (Áo) và Charles James (Mỹ) độc lập phát hiện ra rằng mẫu 'ytterbia' của Marignac thực chất còn chứa một nguyên tố thứ hai. Urbain được trao quyền đặt tên và chọn tên Lutetium theo 'Lutetia' — tên tiếng Latinh cổ của thành phố Paris. Đây là nguyên tố cuối cùng và nặng nhất của Họ Lantan."
  },
  {
    "z": 72,
    "sym": "Hf",
    "nameEn": "Hafnium",
    "nameVi": "Hafini",
    "weight": "178.486(6)",
    "weightShort": "178.49",
    "cat": "transition",
    "period": 6,
    "group": "4 (IVB)",
    "row": 6,
    "col": 4,
    "shells": [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d² 6s²",
    "valence": "IV",
    "en": "1.3",
    "ox": "+4",
    "discoverer": "Dirk Coster & George de Hevesy",
    "year": "1923",
    "story": "Theo lý thuyết cấu tạo nguyên tử của Niels Bohr, nguyên tố số 72 không phải đất hiếm mà phải là kim loại chuyển tiếp giống Zirconium. Năm 1923 tại Copenhagen (Đan Mạch), Dirk Coster và George de Hevesy dùng quang phổ tia X tìm thấy nó trong quặng zircon Na Uy và đặt tên là Hafnium (từ 'Hafnia', tên Latinh của Copenhagen, quê hương Niels Bohr). Giá trị nguyên tử khối chuẩn của Hafnium vừa được IUPAC cập nhật vào tháng 12/2019 là 178.486(6)."
  },
  {
    "z": 73,
    "sym": "Ta",
    "nameEn": "Tantalum",
    "nameVi": "Tantan",
    "weight": "180.947 88(2)",
    "weightShort": "180.95",
    "cat": "transition",
    "period": 6,
    "group": "5 (VB)",
    "row": 6,
    "col": 5,
    "shells": [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d³ 6s²",
    "valence": "V",
    "en": "1.5",
    "ox": "+5",
    "discoverer": "Anders Gustaf Ekeberg",
    "year": "1802",
    "story": "Được nhà hóa học Thụy Điển Anders Gustaf Ekeberg phát hiện năm 1802. Vì oxit của nguyên tố này hoàn toàn không phản ứng và không hòa tan khi ngâm ngập trong các loại axit mạnh, Ekeberg đã đặt tên là Tantalum theo nhân vật thần thoại Hy Lạp Tantalus (người bị phạt đứng giữa hồ nước đến cằm nhưng không bao giờ uống được nước). Tantan dùng chế tạo tụ điện siêu nhỏ trong điện thoại di động."
  },
  {
    "z": 74,
    "sym": "W",
    "nameEn": "Tungsten",
    "nameVi": "Vonfram",
    "weight": "183.84(1)",
    "weightShort": "183.84",
    "cat": "transition",
    "period": 6,
    "group": "6 (VIB)",
    "row": 6,
    "col": 6,
    "shells": [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d⁴ 6s²",
    "valence": "II, III, IV, V, VI",
    "en": "2.36",
    "ox": "+2, +3, +4, +5, +6",
    "discoverer": "Juan José Elhuyar & Fausto Elhuyar",
    "year": "1783",
    "story": "Năm 1781, Scheele phát hiện một axit mới từ khoáng vật scheelit (tiếng Thụy Điển 'tung sten' nghĩa là đá nặng). Năm 1783, hai anh em nhà hóa học Tây Ban Nha Juan José và Fausto Elhuyar đã khử oxit từ quặng wolframit bằng than củi để thu được kim loại nguyên chất, từ đó có ký hiệu 'W' (Wolfram). Với nhiệt độ nóng chảy cao nhất trong tất cả các kim loại (3422°C), Vonfram nổi tiếng với dây tóc bóng đèn sợi đốt và mũi khoan siêu cứng."
  },
  {
    "z": 75,
    "sym": "Re",
    "nameEn": "Rhenium",
    "nameVi": "Reni",
    "weight": "186.207(1)",
    "weightShort": "186.21",
    "cat": "transition",
    "period": 6,
    "group": "7 (VIIB)",
    "row": 6,
    "col": 7,
    "shells": [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d⁵ 6s²",
    "valence": "IV, VI, VII",
    "en": "1.9",
    "ox": "-1, +2, +4, +6, +7",
    "discoverer": "Walter Noddack, Ida Tacke & Otto Berg",
    "year": "1925",
    "story": "Được phát hiện năm 1925 tại Đức bởi Walter Noddack, Ida Tacke (sau là vợ ông) và Otto Berg trong quặng bạch kim và columbit. Họ đặt tên là Rhenium theo tên dòng sông Rhine ('Rhenus' trong tiếng Latinh). Reni là nguyên tố có đồng vị bền tự nhiên cuối cùng được tìm thấy trên Trái Đất và được dùng trong siêu hợp kim cánh tua-bin động cơ phản lực."
  },
  {
    "z": 76,
    "sym": "Os",
    "nameEn": "Osmium",
    "nameVi": "Osimi",
    "weight": "190.23(3)",
    "weightShort": "190.23",
    "cat": "transition",
    "period": 6,
    "group": "8 (VIIIB)",
    "row": 6,
    "col": 8,
    "shells": [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d⁶ 6s²",
    "valence": "III, IV, VIII",
    "en": "2.2",
    "ox": "+2, +3, +4, +6, +8",
    "discoverer": "Smithson Tennant",
    "year": "1803",
    "story": "Năm 1803 tại Luân Đôn, khi hòa tan quặng bạch kim trong nước cường toan, nhà hóa học Smithson Tennant nhận thấy phần cặn đen không tan tạo ra một oxit bay hơi có mùi hăng cực mạnh. Ông đặt tên kim loại mới là Osmium (từ tiếng Hy Lạp 'osme' nghĩa là mùi). Osimi là nguyên tố tự nhiên có khối lượng riêng lớn nhất (nặng nhất) trên Trái Đất: 22.59 g/cm³ (nặng gấp đôi chì)."
  },
  {
    "z": 77,
    "sym": "Ir",
    "nameEn": "Iridium",
    "nameVi": "Iriđi",
    "weight": "192.217(2)",
    "weightShort": "192.22",
    "cat": "transition",
    "period": 6,
    "group": "9 (VIIIB)",
    "row": 6,
    "col": 9,
    "shells": [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d⁷ 6s²",
    "valence": "III, IV",
    "en": "2.20",
    "ox": "+2, +3, +4, +6",
    "discoverer": "Smithson Tennant",
    "year": "1803",
    "story": "Được Smithson Tennant phát hiện năm 1803 cùng lúc với Osmium trong cặn không tan của quặng bạch kim. Vì các muối của nó khi hòa tan trong axit tạo ra rất nhiều màu sắc sặc sỡ khác nhau, ông đặt tên là Iridium theo nữ thần cầu vồng 'Iris' của Hy Lạp. Lớp đất sét giàu Iriđi bất thường trên toàn cầu ở ranh giới K-Pg chính là bằng chứng cho thấy một tiểu hành tinh khổng lồ đã va vào Trái Đất làm tuyệt chủng loài khủng long 66 triệu năm trước."
  },
  {
    "z": 78,
    "sym": "Pt",
    "nameEn": "Platinum",
    "nameVi": "Platin (Bạch kim)",
    "weight": "195.084(9)",
    "weightShort": "195.08",
    "cat": "transition",
    "period": 6,
    "group": "10 (VIIIB)",
    "row": 6,
    "col": 10,
    "shells": [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "config": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    "valence": "II, IV",
    "en": "2.28",
    "ox": "+2, +4",
    "discoverer": "Người bản địa Nam Mỹ / Antonio de Ulloa",
    "year": "Cổ đại / 1735",
    "story": "Các nghệ nhân bản địa vùng Ecuador và Colombia đã chế tác đồ trang sức bằng hợp kim bạch kim-vàng từ hàng thế kỷ trước khi người châu Âu tới. Năm 1735, nhà khoa học Tây Ban Nha Antonio de Ulloa đưa mẫu kim loại này về châu Âu; tên gọi 'Platina' nghĩa là 'bạc nhỏ' trong tiếng Tây Ban Nha. Bạch kim cực kỳ bền hóa học, là kim loại trang sức quý giá và là chất xúc tác cũng như thuốc điều trị ung thư (cisplatin)."
  },
  {
    "z": 79,
    "sym": "Au",
    "nameEn": "Gold",
    "nameVi": "Vàng",
    "weight": "196.966 570(4)",
    "weightShort": "196.97",
    "cat": "transition",
    "period": 6,
    "group": "11 (IB)",
    "row": 6,
    "col": 11,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    "valence": "I, III",
    "en": "2.54",
    "ox": "+1, +3",
    "discoverer": "Biết đến từ thời tiền sử",
    "year": "Cổ đại (~6000 TCN)",
    "story": "Nhờ tồn tại ở dạng đơn chất tự nhiên lấp lánh không bao giờ bị xỉn màu hay gỉ sét, Vàng là một trong những kim loại đầu tiên nhân loại biết đến. Ký hiệu 'Au' bắt nguồn từ tiếng Latinh 'Aurum' (bình minh rạng rỡ). Một gam vàng có thể dát mỏng thành tấm rộng 1 mét vuông; ngoài giá trị tiền tệ và trang sức, vàng là vật liệu tiếp điểm siêu bền trong tàu vũ trụ và vi mạch."
  },
  {
    "z": 80,
    "sym": "Hg",
    "nameEn": "Mercury",
    "nameVi": "Thủy ngân",
    "weight": "200.592(3)",
    "weightShort": "200.59",
    "cat": "transition",
    "period": 6,
    "group": "12 (IIB)",
    "row": 6,
    "col": 12,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    "valence": "I, II",
    "en": "2.00",
    "ox": "+1, +2",
    "discoverer": "Biết đến từ thời cổ đại",
    "year": "Cổ đại (~1500 TCN)",
    "story": "Thủy ngân đã được tìm thấy trong các lăng mộ Ai Cập cổ đại từ năm 1500 TCN và được điều chế từ quặng thần sa (cinnabar, HgS) đỏ tươi. Ký hiệu 'Hg' lấy từ chữ Hy Lạp-Latinh 'Hydrargyrum' nghĩa là 'nước bạc'. Đây là kim loại duy nhất tồn tại ở thể lỏng ở điều kiện tiêu chuẩn."
  },
  {
    "z": 81,
    "sym": "Tl",
    "nameEn": "Thallium",
    "nameVi": "Tali",
    "weight": "204.38",
    "weightShort": "204.38",
    "cat": "post-transition",
    "period": 6,
    "group": "13 (IIIA)",
    "row": 6,
    "col": 13,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    "valence": "I, III",
    "en": "1.62",
    "ox": "+1, +3",
    "discoverer": "William Crookes & Claude-Auguste Lamy",
    "year": "1861",
    "story": "Năm 1861, nhà khoa học Anh William Crookes dùng phương pháp quang phổ kiểm tra bùn thải buồng axit sunfuric và phát hiện một vạch phổ màu xanh lục tươi tuyệt đẹp. Ông đặt tên nguyên tố mới là Thallium (từ chữ Hy Lạp 'thallos' nghĩa là chồi cây xanh non). Claude-Auguste Lamy tại Pháp đã phân lập kim loại Tali vào năm 1862."
  },
  {
    "z": 82,
    "sym": "Pb",
    "nameEn": "Lead",
    "nameVi": "Chì",
    "weight": "207.2(1)",
    "weightShort": "207.2",
    "cat": "post-transition",
    "period": 6,
    "group": "14 (IVA)",
    "row": 6,
    "col": 14,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    "valence": "II, IV",
    "en": "2.33",
    "ox": "+2, +4",
    "discoverer": "Biết đến từ thời cổ đại",
    "year": "Cổ đại (~7000 TCN)",
    "story": "Do dễ nóng chảy và dễ tách từ quặng galen (PbS), Chì đã được con người đúc tượng và làm ống dẫn nước từ hàng nghìn năm trước. Người La Mã gọi chì là 'Plumbum', từ đó sinh ra ký hiệu 'Pb' và cả từ 'plumber' (thợ sửa ống nước) trong tiếng Anh. Ngày nay chì được dùng chủ yếu trong bình ắc quy và tấm chắn bảo vệ bức xạ tia X."
  },
  {
    "z": 83,
    "sym": "Bi",
    "nameEn": "Bismuth",
    "nameVi": "Bitmut",
    "weight": "208.980 40(1)",
    "weightShort": "208.98",
    "cat": "post-transition",
    "period": 6,
    "group": "15 (VA)",
    "row": 6,
    "col": 15,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    "valence": "III, V",
    "en": "2.02",
    "ox": "+3, +5",
    "discoverer": "Claude François Geoffroy (xác nhận độc lập)",
    "year": "1753",
    "story": "Dù đã được biết đến từ thời Trung cổ nhưng Bitmut thường bị nhầm với chì và thiếc cho đến khi nhà hóa học Pháp Claude François Geoffroy chứng minh nó là một kim loại riêng biệt vào năm 1753. Khi kết tinh từ trạng thái nóng chảy, Bitmut tạo thành những tinh thể bậc thang hình phễu với lớp màng oxit bảy sắc cầu vồng vô cùng bắt mắt. Khác với chì, Bitmut hầu như không độc và được dùng làm thuốc dạ dày."
  },
  {
    "z": 84,
    "sym": "Po",
    "nameEn": "Polonium",
    "nameVi": "Poloni",
    "weight": "[209]",
    "weightShort": "[209]",
    "cat": "post-transition",
    "period": 6,
    "group": "16 (VIA)",
    "row": 6,
    "col": 16,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    "valence": "II, IV, VI",
    "en": "2.0",
    "ox": "-2, +2, +4, +6",
    "discoverer": "Marie Curie & Pierre Curie",
    "year": "1898",
    "story": "Tháng 7/1898 tại Paris, khi nghiên cứu tính phóng xạ của quặng pitchblende, vợ chồng nhà bác học Marie và Pierre Curie đã tìm ra một nguyên tố mới có độ phóng xạ mạnh gấp 400 lần urani. Bà Marie Skłodowska-Curie đặt tên nguyên tố này là Polonium theo tên tiếng Latinh của tổ quốc Ba Lan ('Polonia') lúc bấy giờ đang bị chia cắt, nhằm thu hút sự chú ý của thế giới tới nền độc lập của quê hương bà."
  },
  {
    "z": 85,
    "sym": "At",
    "nameEn": "Astatine",
    "nameVi": "Atatin",
    "weight": "[210]",
    "weightShort": "[210]",
    "cat": "halogen",
    "period": 6,
    "group": "17 (VIIA)",
    "row": 6,
    "col": 17,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    "valence": "I, III, V, VII",
    "en": "2.2",
    "ox": "-1, +1, +3, +5, +7",
    "discoverer": "Dale R. Corson, Kenneth Ross MacKenzie & Emilio Segrè",
    "year": "1940",
    "story": "Là nguyên tố tự nhiên hiếm nhất trong vỏ Trái Đất (tổng lượng tồn tại tự nhiên trên toàn vỏ Trái Đất tại một thời điểm ước tính chưa tới 1 gam!). Năm 1940 tại Đại học California, Berkeley, nhóm của Corson, MacKenzie và Segrè đã tổng hợp được nó bằng cách bắn phá Bitmut-209 bằng hạt alpha. Tên gọi bắt nguồn từ chữ Hy Lạp 'astatos' nghĩa là 'không bền vững'."
  },
  {
    "z": 86,
    "sym": "Rn",
    "nameEn": "Radon",
    "nameVi": "Rađon",
    "weight": "[222]",
    "weightShort": "[222]",
    "cat": "noble",
    "period": 6,
    "group": "18 (VIIIA)",
    "row": 6,
    "col": 18,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    "valence": "0 (Hợp chất hiếm: II)",
    "en": "2.2",
    "ox": "0, +2",
    "discoverer": "Friedrich Ernst Dorn",
    "year": "1900",
    "story": "Năm 1900, nhà vật lý Đức Friedrich Ernst Dorn phát hiện hợp chất của Radium luôn tỏa ra một chất khí phóng xạ và gọi là 'radium emanation' (xạ khí rađi), sau đó được rút gọn thành Radon. Năm 1910, William Ramsay và Robert Whytlaw-Gray xác định đây là khí hiếm nặng nhất lúc bấy giờ."
  },
  {
    "z": 87,
    "sym": "Fr",
    "nameEn": "Francium",
    "nameVi": "Franxi",
    "weight": "[223]",
    "weightShort": "[223]",
    "cat": "alkali",
    "period": 7,
    "group": "1 (IA)",
    "row": 7,
    "col": 1,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "config": "[Rn] 7s¹",
    "valence": "I",
    "en": "0.7",
    "ox": "+1",
    "discoverer": "Marguerite Perey",
    "year": "1939",
    "story": "Franxi là nguyên tố cuối cùng trong lịch sử được phát hiện trong tự nhiên (các nguyên tố tìm thấy sau đó đều được tạo ra trong phòng thí nghiệm trước). Năm 1939 tại Viện Radium ở Paris, nhà vật lý nữ Marguerite Perey (học trò của Marie Curie) phát hiện nguyên tố số 87 khi tinh chế mẫu Actinium-227 và đặt tên là Francium để vinh danh nước Pháp."
  },
  {
    "z": 88,
    "sym": "Ra",
    "nameEn": "Radium",
    "nameVi": "Rađi",
    "weight": "[226]",
    "weightShort": "[226]",
    "cat": "alkaline",
    "period": 7,
    "group": "2 (IIA)",
    "row": 7,
    "col": 2,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "config": "[Rn] 7s²",
    "valence": "II",
    "en": "0.9",
    "ox": "+2",
    "discoverer": "Marie Curie, Pierre Curie & Gustave Bémont",
    "year": "1898",
    "story": "Ngày 21/12/1898, chỉ vài tháng sau khi tìm ra Polonium, vợ chồng Marie và Pierre Curie phát hiện thêm một nguyên tố phóng xạ cực mạnh thứ hai từ hàng tấn bã quặng urani pitchblende. Vì các muối của nó tự phát ra ánh sáng xanh dịu trong bóng tối, họ đặt tên là Radium (từ chữ Latinh 'radius' nghĩa là tia sáng). Công trình tách muối Radium tinh khiết đã mang về cho Marie Curie giải Nobel Hóa học năm 1911."
  },
  {
    "z": 89,
    "sym": "Ac",
    "nameEn": "Actinium",
    "nameVi": "Actini",
    "weight": "[227]",
    "weightShort": "[227]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 4,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "config": "[Rn] 6d¹ 7s²",
    "valence": "III",
    "en": "1.1",
    "ox": "+3",
    "discoverer": "André-Louis Debierne & Friedrich Oskar Giesel",
    "year": "1899 / 1902",
    "story": "Năm 1899, nhà hóa học Pháp André-Louis Debierne (bạn đồng nghiệp của gia đình Curie) tách được nguyên tố mới từ bã quặng pitchblende sau khi đã lấy hết radium và polonium. Ông đặt tên là Actinium từ chữ Hy Lạp 'aktis' (tia sáng / chùm tia) vì khả năng phát bức xạ mạnh phát sáng trong bóng tối. Actini mở đầu cho dãy 15 nguyên tố Họ Actini."
  },
  {
    "z": 90,
    "sym": "Th",
    "nameEn": "Thorium",
    "nameVi": "Thori",
    "weight": "232.0377(4)",
    "weightShort": "232.04",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 5,
    "shells": [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "config": "[Rn] 6d² 7s²",
    "valence": "IV",
    "en": "1.3",
    "ox": "+4",
    "discoverer": "Jöns Jakob Berzelius",
    "year": "1829",
    "story": "Năm 1828, mục sư kiêm nhà khoáng vật học Na Uy Morten Thrane Esmark gửi một mẫu khoáng vật đen tìm thấy trên đảo Løvøya cho nhà hóa học lừng danh Jöns Jakob Berzelius. Năm 1829, Berzelius xác định nó chứa một nguyên tố mới và đặt tên là Thorium theo thần Sấm Thor trong thần thoại Bắc Âu. Gần 70 năm sau (1898), Marie Curie và Gerhard Schmidt độc lập phát hiện Thori có tính phóng xạ."
  },
  {
    "z": 91,
    "sym": "Pa",
    "nameEn": "Protactinium",
    "nameVi": "Protactini",
    "weight": "231.035 88(1)",
    "weightShort": "231.04",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 6,
    "shells": [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "config": "[Rn] 5f² 6d¹ 7s²",
    "valence": "IV, V",
    "en": "1.5",
    "ox": "+4, +5",
    "discoverer": "Kasimir Fajans, Oswald Helmuth Göhring, Otto Hahn & Lise Meitner",
    "year": "1913 / 1917",
    "story": "Năm 1913, Fajans và Göhring tìm ra đồng vị sống rất ngắn (1.17 phút) của nguyên tố số 91 và gọi là 'Brevium'. Năm 1917, Otto Hahn và Lise Meitner tại Đức (cùng Frederick Soddy và John Cranston tại Anh) tìm ra đồng vị bền hơn nhiều là Pa-231. Vì nó phân rã alpha tạo thành Actinium, nên nó được đặt tên là Protactinium ('tiền thân của Actinium')."
  },
  {
    "z": 92,
    "sym": "U",
    "nameEn": "Uranium",
    "nameVi": "Urani",
    "weight": "238.028 91(3)",
    "weightShort": "238.03",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 7,
    "shells": [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "config": "[Rn] 5f³ 6d¹ 7s²",
    "valence": "III, IV, V, VI",
    "en": "1.38",
    "ox": "+3, +4, +5, +6",
    "discoverer": "Martin Heinrich Klaproth (phân lập: Eugène-Melchior Péligot)",
    "year": "1789 / 1841",
    "story": "Năm 1789 tại Berlin, nhà hóa học Đức Martin Heinrich Klaproth chiết xuất được oxit màu vàng từ quặng pitchblende và đặt tên nguyên tố mới là Uranium theo tên hành tinh Thiên Vương tinh (Uranus) vừa được William Herschel phát hiện 8 năm trước đó. Năm 1896, Henri Becquerel tình cờ phát hiện muối Urani làm đen kính ảnh trong bóng tối — mở ra kỷ nguyên Vật lý Hạt nhân và Phóng xạ."
  },
  {
    "z": 93,
    "sym": "Np",
    "nameEn": "Neptunium",
    "nameVi": "Neptuni",
    "weight": "[237]",
    "weightShort": "[237]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 8,
    "shells": [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "config": "[Rn] 5f⁴ 6d¹ 7s²",
    "valence": "III, IV, V, VI",
    "en": "1.36",
    "ox": "+3, +4, +5, +6",
    "discoverer": "Edwin McMillan & Philip H. Abelson",
    "year": "1940",
    "story": "Năm 1940 tại Phòng thí nghiệm Bức xạ Berkeley (Mỹ), Edwin McMillan và Philip Abelson bắn phá Uranium bằng neutron chậm và tạo ra nguyên tố siêu urani (nặng hơn urani) đầu tiên trong lịch sử ở vị trí số 93. Vì trong Hệ Mặt Trời hành tinh Hải Vương tinh (Neptune) nằm ngay sau Thiên Vương tinh (Uranus), họ đặt tên nguyên tố số 93 là Neptunium."
  },
  {
    "z": 94,
    "sym": "Pu",
    "nameEn": "Plutonium",
    "nameVi": "Plutoni",
    "weight": "[244]",
    "weightShort": "[244]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 9,
    "shells": [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "config": "[Rn] 5f⁶ 7s²",
    "valence": "III, IV, V, VI",
    "en": "1.28",
    "ox": "+3, +4, +5, +6",
    "discoverer": "Glenn T. Seaborg, Arthur Wahl, Joseph W. Kennedy & Edwin McMillan",
    "year": "1940",
    "story": "Tháng 12/1940 tại Berkeley, nhóm của Glenn T. Seaborg bắn phá Uranium-238 bằng hạt nhân đơteri để tạo ra Neptunium-238, sau đó phân rã beta thành nguyên tố số 94. Tiếp nối truyền thống đặt tên theo Hệ Mặt Trời (Uranus → Neptune → Pluto), họ đặt tên là Plutonium theo Diêm Vương tinh. Đồng vị Pu-238 hiện là nguồn pin nhiệt điện đồng vị phóng xạ nuôi các tàu thăm dò vũ trụ Voyager và xe tự hành sao Hỏa."
  },
  {
    "z": 95,
    "sym": "Am",
    "nameEn": "Americium",
    "nameVi": "Amerixi",
    "weight": "[243]",
    "weightShort": "[243]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 10,
    "shells": [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "config": "[Rn] 5f⁷ 7s²",
    "valence": "III, IV, V, VI",
    "en": "1.3",
    "ox": "+3, +4, +5, +6",
    "discoverer": "Glenn T. Seaborg, Ralph A. James, Leon O. Morgan & Albert Ghiorso",
    "year": "1944",
    "story": "Được nhóm của Glenn T. Seaborg tổng hợp vào cuối năm 1944 tại Phòng thí nghiệm Luyện kim thuộc Đại học Chicago bằng cách bắn phá Plutonium-239 bằng neutron. Vì nó nằm ngay dưới nguyên tố số 63 Europium (đặt theo tên châu Âu) trong bảng tuần hoàn, nhóm nghiên cứu đã đặt tên là Americium theo tên châu Mỹ (Americas). Một lượng cực nhỏ Am-241 được dùng trong đầu báo khói gia đình."
  },
  {
    "z": 96,
    "sym": "Cm",
    "nameEn": "Curium",
    "nameVi": "Curi",
    "weight": "[247]",
    "weightShort": "[247]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 11,
    "shells": [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "config": "[Rn] 5f⁷ 6d¹ 7s²",
    "valence": "III, IV",
    "en": "1.3",
    "ox": "+3, +4",
    "discoverer": "Glenn T. Seaborg, Ralph A. James & Albert Ghiorso",
    "year": "1944",
    "story": "Mùa hè năm 1944 tại Berkeley, nhóm của Seaborg bắn phá Plutonium-239 bằng các hạt alpha (ion heli) trong máy gia tốc cyclotron 60 inch và tạo ra nguyên tố số 96. Nó được đặt tên là Curium để tôn vinh đôi vợ chồng bác học huyền thoại Marie và Pierre Curie — tương tự như nguyên tố số 64 Gadolinium nằm ngay phía trên nó được đặt theo tên nhà tiên phong đất hiếm Johan Gadolin."
  },
  {
    "z": 97,
    "sym": "Bk",
    "nameEn": "Berkelium",
    "nameVi": "Beckeli",
    "weight": "[247]",
    "weightShort": "[247]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 12,
    "shells": [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "config": "[Rn] 5f⁹ 7s²",
    "valence": "III, IV",
    "en": "1.3",
    "ox": "+3, +4",
    "discoverer": "Glenn T. Seaborg, Stanley G. Thompson & Albert Ghiorso",
    "year": "1949",
    "story": "Tháng 12/1949, nhóm của Seaborg, Thompson và Ghiorso bắn phá vài miligam Americium-241 bằng hạt alpha để tạo ra nguyên tố số 97. Vì nguyên tố tương ứng ở Họ Lantan ngay phía trên nó (Terbium, số 65) được đặt theo tên làng Ytterby nơi phát hiện, nên nguyên tố 97 được đặt tên là Berkelium để vinh danh thành phố đại học Berkeley (California), cái nôi của nhiều nguyên tố siêu nặng."
  },
  {
    "z": 98,
    "sym": "Cf",
    "nameEn": "Californium",
    "nameVi": "Califoni",
    "weight": "[251]",
    "weightShort": "[251]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 13,
    "shells": [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "config": "[Rn] 5f¹⁰ 7s²",
    "valence": "III",
    "en": "1.3",
    "ox": "+3",
    "discoverer": "Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso & Glenn T. Seaborg",
    "year": "1950",
    "story": "Tháng 2/1950, chỉ hai tháng sau khi tìm ra Berkelium, nhóm nghiên cứu tại Đại học California, Berkeley tổng hợp được nguyên tố số 98 bằng cách bắn phá Curium-242 bằng hạt alpha và đặt tên là Californium theo tên bang California và Đại học California. Đồng vị Cf-252 là nguồn phát xạ neutron mạnh mẽ, dùng để khởi động lò phản ứng hạt nhân và soi chiếu kiểm tra cấu trúc máy bay."
  },
  {
    "z": 99,
    "sym": "Es",
    "nameEn": "Einsteinium",
    "nameVi": "Anhstaini",
    "weight": "[252]",
    "weightShort": "[252]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 14,
    "shells": [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "config": "[Rn] 5f¹¹ 7s²",
    "valence": "II, III",
    "en": "1.3",
    "ox": "+2, +3",
    "discoverer": "Albert Ghiorso và nhóm nghiên cứu Berkeley / Argonne / Los Alamos",
    "year": "1952",
    "story": "Tháng 12/1952, nhóm của Albert Ghiorso phân tích bụi san hô thu thập từ vụ thử nhiệt hạch đầu tiên 'Ivy Mike' ở Thái Bình Dương và bất ngờ tìm thấy nguyên tố số 99 được hình thành khi Uranium-238 bắt giữ liên tiếp 15 neutron trong chớp mắt. Năm 1955, nguyên tố được đặt tên là Einsteinium để tưởng nhớ nhà vật lý vĩ đại Albert Einstein vừa qua đời."
  },
  {
    "z": 100,
    "sym": "Fm",
    "nameEn": "Fermium",
    "nameVi": "Fecmi",
    "weight": "[257]",
    "weightShort": "[257]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 15,
    "shells": [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "config": "[Rn] 5f¹² 7s²",
    "valence": "II, III",
    "en": "1.3",
    "ox": "+2, +3",
    "discoverer": "Albert Ghiorso và nhóm nghiên cứu Berkeley / Argonne / Los Alamos",
    "year": "1953",
    "story": "Cùng được phát hiện trong mẫu bụi từ vụ thử nhiệt hạch năm 1952–1953 ngay sau Einsteinium khi Uranium-238 bắt giữ tới 17 neutron liên tiếp. Nguyên tố số 100 được đặt tên là Fermium nhằm tôn vinh nhà vật lý hạt nhân người Ý-Mỹ Enrico Fermi, cha đẻ của lò phản ứng hạt nhân tự duy trì đầu tiên trên thế giới."
  },
  {
    "z": 101,
    "sym": "Md",
    "nameEn": "Mendelevium",
    "nameVi": "Menđêlêvi",
    "weight": "[258]",
    "weightShort": "[258]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 16,
    "shells": [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "config": "[Rn] 5f¹³ 7s²",
    "valence": "II, III",
    "en": "1.3",
    "ox": "+2, +3",
    "discoverer": "Albert Ghiorso, Bernard G. Harvey, Gregory R. Choppin, Stanley G. Thompson & Glenn T. Seaborg",
    "year": "1955",
    "story": "Đầu năm 1955 tại Berkeley, nhóm của Ghiorso và Seaborg bắn phá chỉ khoảng 1 tỷ nguyên tử Einsteinium-253 bằng hạt alpha suốt đêm và thu được đúng 17 nguyên tử của nguyên tố số 101 — đánh dấu lần đầu tiên một nguyên tố mới được tạo ra và nhận diện từng nguyên tử một! Nó được đặt tên là Mendelevium để vinh danh Dmitri Mendeleev, cha đẻ của Bảng tuần hoàn hóa học."
  },
  {
    "z": 102,
    "sym": "No",
    "nameEn": "Nobelium",
    "nameVi": "Nobeli",
    "weight": "[259]",
    "weightShort": "[259]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 17,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "config": "[Rn] 5f¹⁴ 7s²",
    "valence": "II, III",
    "en": "1.3",
    "ox": "+2, +3",
    "discoverer": "Viện Liên hợp Nghiên cứu Hạt nhân Dubna (JINR) & Phòng thí nghiệm Berkeley",
    "year": "1958–1966",
    "story": "Sau các thí nghiệm tại Thụy Điển (1957), Berkeley (1958) và chuỗi thí nghiệm xác nhận dứt khoát tại Viện Dubna (Liên Xô) dưới sự dẫn dắt của Georgy Flyorov vào thập niên 1960, nguyên tố số 102 được tổng hợp bằng cách bắn phá Curium bằng ion Cacbon. IUPAC giữ nguyên tên gọi Nobelium để vinh danh Alfred Nobel, người phát minh thuốc nổ dynamite và sáng lập Giải thưởng Nobel."
  },
  {
    "z": 103,
    "sym": "Lr",
    "nameEn": "Lawrencium",
    "nameVi": "Lorenxi",
    "weight": "[262]",
    "weightShort": "[262]",
    "cat": "actinide",
    "period": 7,
    "group": "Họ Actini (IIIB)",
    "row": 10,
    "col": 18,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "config": "[Rn] 5f¹⁴ 7s² 7p¹",
    "valence": "III",
    "en": "1.3",
    "ox": "+3",
    "discoverer": "Albert Ghiorso, Torbjørn Sikkeland, Almon E. Larsh, Robert M. Latimer & nhóm Dubna",
    "year": "1961–1971",
    "story": "Được tổng hợp tại Berkeley năm 1961 (bắn phá Californium bằng hạt nhân Bo) và tại Dubna giai đoạn 1965–1971. Nguyên tố số 103 khép lại Họ Actini và được đặt tên là Lawrencium nhằm vinh danh nhà vật lý Ernest O. Lawrence — người phát minh ra máy gia tốc hạt Cyclotron giúp nhân loại tìm ra hàng loạt nguyên tố nhân tạo."
  },
  {
    "z": 104,
    "sym": "Rf",
    "nameEn": "Rutherfordium",
    "nameVi": "Rơđơfođi",
    "weight": "[267]",
    "weightShort": "[267]",
    "cat": "transition",
    "period": 7,
    "group": "4 (IVB)",
    "row": 7,
    "col": 4,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "config": "[Rn] 5f¹⁴ 6d² 7s²",
    "valence": "IV",
    "en": "—",
    "ox": "+4",
    "discoverer": "Viện Dubna (JINR, Liên Xô) & Phòng thí nghiệm Lawrence Berkeley (Mỹ)",
    "year": "1964 / 1969",
    "story": "Nguyên tố siêu actini đầu tiên (số 104) được nhóm của Georgy Flyorov tại Dubna báo cáo năm 1964 và nhóm của Albert Ghiorso tại Berkeley tổng hợp độc lập năm 1969. Năm 1997, IUPAC chính thức đặt tên là Rutherfordium để tôn vinh nhà vật lý Ernest Rutherford — cha đẻ của mô hình nguyên tử có hạt nhân ở tâm."
  },
  {
    "z": 105,
    "sym": "Db",
    "nameEn": "Dubnium",
    "nameVi": "Đupni",
    "weight": "[270]",
    "weightShort": "[270]",
    "cat": "transition",
    "period": 7,
    "group": "5 (VB)",
    "row": 7,
    "col": 5,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "config": "[Rn] 5f¹⁴ 6d³ 7s²",
    "valence": "V",
    "en": "—",
    "ox": "+5",
    "discoverer": "Viện Liên hợp Nghiên cứu Hạt nhân Dubna (JINR) & Phòng thí nghiệm Lawrence Berkeley",
    "year": "1968 / 1970",
    "story": "Được phát hiện độc lập bởi Viện Dubna (Liên Xô, 1968) và Phòng thí nghiệm Berkeley (Mỹ, 1970). Sau nhiều năm thảo luận về tên gọi (từng được gọi là Nielsbohrium ở Liên Xô và Hahnium ở Mỹ), năm 1997 IUPAC chính thức đặt tên nguyên tố 105 là Dubnium để vinh danh thành phố khoa học Dubna (Nga), trung tâm nghiên cứu hạt nhân hàng đầu thế giới."
  },
  {
    "z": 106,
    "sym": "Sg",
    "nameEn": "Seaborgium",
    "nameVi": "Xibogi",
    "weight": "[269]",
    "weightShort": "[269]",
    "cat": "transition",
    "period": 7,
    "group": "6 (VIB)",
    "row": 7,
    "col": 6,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "config": "[Rn] 5f¹⁴ 6d⁴ 7s²",
    "valence": "VI",
    "en": "—",
    "ox": "+6",
    "discoverer": "Albert Ghiorso, Glenn T. Seaborg & nhóm Lawrence Berkeley / Dubna",
    "year": "1974",
    "story": "Năm 1974, nhóm nghiên cứu tại Berkeley bắn phá Californium-249 bằng hạt nhân Oxi-18 tạo ra đồng vị số 106. Nguyên tố này được đặt tên là Seaborgium để vinh danh nhà hóa học hạt nhân người Mỹ Glenn T. Seaborg (người đồng phát hiện ra 10 nguyên tố siêu urani). Ông là người đầu tiên trong lịch sử được đặt tên cho một nguyên tố hóa học khi vẫn còn sống."
  },
  {
    "z": 107,
    "sym": "Bh",
    "nameEn": "Bohrium",
    "nameVi": "Bori",
    "weight": "[270]",
    "weightShort": "[270]",
    "cat": "transition",
    "period": 7,
    "group": "7 (VIIB)",
    "row": 7,
    "col": 7,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "config": "[Rn] 5f¹⁴ 6d⁵ 7s²",
    "valence": "VII",
    "en": "—",
    "ox": "+7",
    "discoverer": "Peter Armbruster, Gottfried Münzenberg & Viện GSI Darmstadt (Đức)",
    "year": "1981",
    "story": "Năm 1981 tại Trung tâm Nghiên cứu Ion Nặng GSI ở Darmstadt (Đức), nhóm của Peter Armbruster và Gottfried Münzenberg đã dùng phương pháp dung hợp lạnh, bắn phá mục tiêu Bitmut-209 bằng chùm hạt nhân Crom-54 để tạo ra nguyên tố số 107. Nó được đặt tên là Bohrium nhằm tôn vinh nhà vật lý Đan Mạch Niels Bohr — cha đẻ của mô hình lớp vỏ electron nguyên tử."
  },
  {
    "z": 108,
    "sym": "Hs",
    "nameEn": "Hassium",
    "nameVi": "Haxi",
    "weight": "[270]",
    "weightShort": "[270]",
    "cat": "transition",
    "period": 7,
    "group": "8 (VIIIB)",
    "row": 7,
    "col": 8,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "config": "[Rn] 5f¹⁴ 6d⁶ 7s²",
    "valence": "VIII",
    "en": "—",
    "ox": "+8",
    "discoverer": "Peter Armbruster, Gottfried Münzenberg & Viện GSI Darmstadt (Đức)",
    "year": "1984",
    "story": "Được tổng hợp năm 1984 tại Viện GSI (Darmstadt, Đức) bằng cách bắn phá Chì-208 bằng hạt nhân Sắt-58. Tên gọi Hassium bắt nguồn từ 'Hassia', tên tiếng Latinh của bang Hessen (Đức) nơi đặt trụ sở của viện nghiên cứu GSI. Các thí nghiệm hóa học trên từng nguyên tử cho thấy Hassium tạo ra oxit dễ bay hơi HsO₄ giống hệt với Osmium (OsO₄) ngay phía trên nó."
  },
  {
    "z": 109,
    "sym": "Mt",
    "nameEn": "Meitnerium",
    "nameVi": "Maitnơri",
    "weight": "[278]",
    "weightShort": "[278]",
    "cat": "transition",
    "period": 7,
    "group": "9 (VIIIB)",
    "row": 7,
    "col": 9,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "config": "[Rn] 5f¹⁴ 6d⁷ 7s²",
    "valence": "—",
    "en": "—",
    "ox": "+1, +3, +6 (dự đoán)",
    "discoverer": "Peter Armbruster, Gottfried Münzenberg & Viện GSI Darmstadt (Đức)",
    "year": "1982",
    "story": "Ngày 29/8/1982, nhóm nghiên cứu GSI tại Darmstadt đã phát hiện một nguyên tử duy nhất của nguyên tố 109 khi bắn phá Bitmut-209 bằng hạt nhân Sắt-58. Nguyên tố được đặt tên là Meitnerium để tôn vinh nữ bác học vật lý người Áo-Thụy Điển Lise Meitner — người đầu tiên giải thích về mặt lý thuyết hiện tượng phân hạch hạt nhân."
  },
  {
    "z": 110,
    "sym": "Ds",
    "nameEn": "Darmstadtium",
    "nameVi": "Đamstati",
    "weight": "[281]",
    "weightShort": "[281]",
    "cat": "transition",
    "period": 7,
    "group": "10 (VIIIB)",
    "row": 7,
    "col": 10,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      17,
      1
    ],
    "config": "[Rn] 5f¹⁴ 6d⁹ 7s¹",
    "valence": "—",
    "en": "—",
    "ox": "+2, +4, +6 (dự đoán)",
    "discoverer": "Sigurd Hofmann, Victor Ninov, Peter Armbruster & Viện GSI Darmstadt",
    "year": "1994",
    "story": "Ngày 9/11/1994 tại Viện GSI (Đức), nhóm của giáo sư Sigurd Hofmann đã tạo ra những nguyên tử đầu tiên của nguyên tố số 110 bằng cách gia tốc các ion Niken-62 bắn vào bia Chì-208. Nguyên tố được đặt tên là Darmstadtium để vinh danh thành phố Darmstadt của nước Đức, nơi đã khám phá ra 6 nguyên tố siêu nặng từ 107 đến 112."
  },
  {
    "z": 111,
    "sym": "Rg",
    "nameEn": "Roentgenium",
    "nameVi": "Rơngheni",
    "weight": "[281]",
    "weightShort": "[281]",
    "cat": "transition",
    "period": 7,
    "group": "11 (IB)",
    "row": 7,
    "col": 11,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      1
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s¹",
    "valence": "—",
    "en": "—",
    "ox": "-1, +1, +3, +5 (dự đoán)",
    "discoverer": "Sigurd Hofmann & Viện GSI Darmstadt (Đức)",
    "year": "1994",
    "story": "Được tổng hợp vào ngày 8/12/1994 tại Viện GSI Darmstadt chỉ một tháng sau Darmstadtium bằng cách bắn phá Bitmut-209 bằng hạt nhân Niken-64. Năm 2004, đúng dịp kỷ niệm gần 110 năm ngày phát hiện ra tia X (1895), IUPAC chính thức đặt tên nguyên tố 111 là Roentgenium để tưởng nhớ nhà vật lý Đức Wilhelm Conrad Röntgen — chủ nhân giải Nobel Vật lý đầu tiên trong lịch sử."
  },
  {
    "z": 112,
    "sym": "Cn",
    "nameEn": "Copernicium",
    "nameVi": "Copernixi",
    "weight": "[285]",
    "weightShort": "[285]",
    "cat": "transition",
    "period": 7,
    "group": "12 (IIB)",
    "row": 7,
    "col": 12,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    "valence": "II",
    "en": "—",
    "ox": "0, +2",
    "discoverer": "Sigurd Hofmann & Viện GSI Darmstadt (Đức)",
    "year": "1996",
    "story": "Tối ngày 9/2/1996 tại GSI Darmstadt, nhóm của giáo sư Sigurd Hofmann tổng hợp được nguyên tố 112 bằng phản ứng dung hợp giữa Kẽm-70 và Chì-208. Ngày 19/2/2010 (đúng kỷ niệm 537 năm ngày sinh của nhà thiên văn học Nicolaus Copernicus), IUPAC chính thức công bố tên gọi Copernicium nhằm vinh danh người đã đề xuất thuyết Nhật tâm (Trái Đất quay quanh Mặt Trời), cũng như hình ảnh các electron quay quanh hạt nhân."
  },
  {
    "z": 113,
    "sym": "Nh",
    "nameEn": "Nihonium",
    "nameVi": "Nihoni",
    "weight": "[286]",
    "weightShort": "[286]",
    "cat": "post-transition",
    "period": 7,
    "group": "13 (IIIA)",
    "row": 7,
    "col": 13,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    "valence": "—",
    "en": "—",
    "ox": "+1, +3 (dự đoán)",
    "discoverer": "Kosuke Morita & Viện Nghiên cứu RIKEN (Nhật Bản)",
    "year": "2004",
    "story": "Từ năm 2004 đến 2012, nhóm nghiên cứu của giáo sư Kosuke Morita tại Trung tâm RIKEN Nishina (Nhật Bản) đã kiên trì bắn phá bia Bitmut-209 bằng chùm ion Kẽm-70 suốt hàng trăm ngày liên tục để tạo ra nguyên tố số 113. Năm 2016, nó được đặt tên là Nihonium (từ 'Nihon' nghĩa là Nhật Bản — 'Đất nước Mặt Trời mọc'), trở thành nguyên tố đầu tiên trong lịch sử được phát hiện và đặt tên tại châu Á."
  },
  {
    "z": 114,
    "sym": "Fl",
    "nameEn": "Flerovium",
    "nameVi": "Flerovi",
    "weight": "[289]",
    "weightShort": "[289]",
    "cat": "post-transition",
    "period": 7,
    "group": "14 (IVA)",
    "row": 7,
    "col": 14,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    "valence": "—",
    "en": "—",
    "ox": "0, +2, +4 (dự đoán)",
    "discoverer": "Yuri Oganessian, Viện Dubna (JINR, Nga) & Phòng thí nghiệm Lawrence Livermore (Mỹ)",
    "year": "1998",
    "story": "Tháng 12/1998, đội ngũ của viện sĩ Yuri Oganessian tại Viện Dubna (Nga) hợp tác cùng Phòng thí nghiệm Quốc gia Lawrence Livermore (Mỹ) đã bắn phá Plutonium-244 bằng chùm hạt nhân Canxi-48 để tạo ra nguyên tố 114, mở cánh cửa tiến gần 'Hòn đảo bền vững' của các hạt nhân siêu nặng. Năm 2012, nguyên tố được đặt tên là Flerovium nhằm vinh danh Phòng thí nghiệm Phản ứng Hạt nhân Flerov và nhà vật lý Georgy Flyorov."
  },
  {
    "z": 115,
    "sym": "Mc",
    "nameEn": "Moscovium",
    "nameVi": "Moscovi",
    "weight": "[289]",
    "weightShort": "[289]",
    "cat": "post-transition",
    "period": 7,
    "group": "15 (VA)",
    "row": 7,
    "col": 15,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    "valence": "—",
    "en": "—",
    "ox": "+1, +3 (dự đoán)",
    "discoverer": "Viện Dubna (JINR, Nga) & Phòng thí nghiệm Lawrence Livermore / Oak Ridge (Mỹ)",
    "year": "2003",
    "story": "Được tổng hợp vào tháng 8/2003 tại Viện Liên hợp Nghiên cứu Hạt nhân Dubna (Nga) bằng cách bắn phá Americium-243 (do Phòng thí nghiệm Oak Ridge cung cấp) bằng ion Canxi-48. Năm 2016, IUPAC chính thức đặt tên nguyên tố 115 là Moscovium để ghi nhận vùng Moscow (tỉnh Moskva), nơi đặt trụ sở của Viện Dubna."
  },
  {
    "z": 116,
    "sym": "Lv",
    "nameEn": "Livermorium",
    "nameVi": "Livermori",
    "weight": "[293]",
    "weightShort": "[293]",
    "cat": "post-transition",
    "period": 7,
    "group": "16 (VIA)",
    "row": 7,
    "col": 16,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    "valence": "—",
    "en": "—",
    "ox": "+2, +4 (dự đoán)",
    "discoverer": "Viện Dubna (JINR, Nga) & Phòng thí nghiệm Quốc gia Lawrence Livermore (Mỹ)",
    "year": "2000",
    "story": "Tháng 7/2000, sự hợp tác giữa các nhà khoa học tại Dubna và Lawrence Livermore đã tổng hợp thành công nguyên tố số 116 khi bắn phá bia Curium-248 bằng chùm ion Canxi-48. Năm 2012, nguyên tố được đặt tên là Livermorium để vinh danh Phòng thí nghiệm Quốc gia Lawrence Livermore và thành phố Livermore (bang California, Mỹ)."
  },
  {
    "z": 117,
    "sym": "Ts",
    "nameEn": "Tennessine",
    "nameVi": "Tennessine",
    "weight": "[293]",
    "weightShort": "[293]",
    "cat": "halogen",
    "period": 7,
    "group": "17 (VIIA)",
    "row": 7,
    "col": 17,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    "valence": "—",
    "en": "—",
    "ox": "-1, +1, +3, +5 (dự đoán)",
    "discoverer": "Viện Dubna (JINR), Phòng thí nghiệm Oak Ridge, Đại học Vanderbilt & Lawrence Livermore",
    "year": "2010",
    "story": "Để tạo ra nguyên tố 117 vào năm 2010, Phòng thí nghiệm Quốc gia Oak Ridge (bang Tennessee, Mỹ) đã mất hơn 250 ngày chiếu xạ để chế tạo được 22 miligam Berkelium-249 cực hiếm, sau đó gửi sang Dubna để bắn phá bằng chùm Canxi-48. Năm 2016, nguyên tố được đặt tên là Tennessine nhằm vinh danh các viện nghiên cứu tại bang Tennessee."
  },
  {
    "z": 118,
    "sym": "Og",
    "nameEn": "Oganesson",
    "nameVi": "Oganesson",
    "weight": "[294]",
    "weightShort": "[294]",
    "cat": "noble",
    "period": 7,
    "group": "18 (VIIIA)",
    "row": 7,
    "col": 18,
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "config": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    "valence": "0 (Khí hiếm siêu nặng)",
    "en": "—",
    "ox": "0, +2, +4 (dự đoán)",
    "discoverer": "Yuri Oganessian, Viện Dubna (JINR) & Phòng thí nghiệm Lawrence Livermore",
    "year": "2002 / 2006",
    "story": "Nguyên tố số 118 — nguyên tố nặng nhất hiện nay và khép lại Chu kỳ 7 của bảng tuần hoàn — được tổng hợp tại Dubna năm 2002–2006 bằng cách bắn phá Californium-249 bằng hạt nhân Canxi-48. Năm 2016, IUPAC đặt tên là Oganesson để vinh danh nhà vật lý hạt nhân Yuri Oganessian (người thứ hai trong lịch sử sau Glenn Seaborg được đặt tên cho một nguyên tố khi đang còn sống)."
  }
];

// Trạng thái ứng dụng
let activeCategory = "all";
let searchQuery = "";
let currentElementZ = 1;
let isCompactMobile = false;

// Trạng thái mô hình 3D Electron
const atom3DState = {
  element: null,
  rotX: 0.42,
  rotY: -0.55,
  autoRotate: true,
  mode: "multi",
  zoom: 1.0,
  isDragging: false,
  lastMouseX: 0,
  lastMouseY: 0,
  pinchStartDist: 0,
  pinchStartZoom: 1.0,
  animFrameId: null,
  angleTick: 0,
  isFullscreen: false
};

function normalizeVi(str) {
  if (!str) return "";
  return str
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

function renderPeriodicTable() {
  const grid = document.getElementById("periodicGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const cornerCell = document.createElement("div");
  cornerCell.className = "group-header";
  cornerCell.style.gridRow = "1";
  cornerCell.style.gridColumn = "1";
  cornerCell.innerHTML = '<span style="font-size:0.55rem;">CK\\Nh</span>';
  grid.appendChild(cornerCell);

  GROUP_HEADERS.forEach((g) => {
    const gh = document.createElement("div");
    gh.className = "group-header";
    gh.style.gridRow = "1";
    gh.style.gridColumn = String(g.col + 1);
    gh.innerHTML = `<span>${g.num}</span><span class="roman">${g.roman}</span>`;
    grid.appendChild(gh);
  });

  for (let p = 1; p <= 7; p++) {
    const ph = document.createElement("div");
    ph.className = "period-header";
    ph.style.gridRow = String(p + 1);
    ph.style.gridColumn = "1";
    ph.textContent = String(p);
    ph.title = `Chu kỳ ${p}`;
    grid.appendChild(ph);
  }

  const lanRange = document.createElement("div");
  lanRange.className = "range-cell lanthanide-range";
  lanRange.style.gridRow = "7";
  lanRange.style.gridColumn = "4";
  lanRange.innerHTML = '<span class="range-num">57–71</span><span class="range-lbl">La–Lu</span>';
  lanRange.title = "Nhấn để làm nổi bật Họ Lantan (57–71)";
  lanRange.addEventListener("click", () => toggleCategoryFilter("lanthanide"));
  grid.appendChild(lanRange);

  const actRange = document.createElement("div");
  actRange.className = "range-cell actinide-range";
  actRange.style.gridRow = "8";
  actRange.style.gridColumn = "4";
  actRange.innerHTML = '<span class="range-num">89–103</span><span class="range-lbl">Ac–Lr</span>';
  actRange.title = "Nhấn để làm nổi bật Họ Actini (89–103)";
  actRange.addEventListener("click", () => toggleCategoryFilter("actinide"));
  grid.appendChild(actRange);

  const lanLabel = document.createElement("div");
  lanLabel.className = "series-label-cell lanthanide-label";
  lanLabel.style.gridRow = "10";
  lanLabel.style.gridColumn = "1 / span 4";
  lanLabel.textContent = "✱ Họ Lantan (57–71)";
  lanLabel.style.cursor = "pointer";
  lanLabel.addEventListener("click", () => toggleCategoryFilter("lanthanide"));
  grid.appendChild(lanLabel);

  const actLabel = document.createElement("div");
  actLabel.className = "series-label-cell actinide-label";
  actLabel.style.gridRow = "11";
  actLabel.style.gridColumn = "1 / span 4";
  actLabel.textContent = "✱✱ Họ Actini (89–103)";
  actLabel.style.cursor = "pointer";
  actLabel.addEventListener("click", () => toggleCategoryFilter("actinide"));
  grid.appendChild(actLabel);

  ELEMENTS_DATA.forEach((el) => {
    const cell = document.createElement("div");
    cell.className = "el-cell";
    cell.dataset.z = String(el.z);
    cell.dataset.cat = el.cat;
    cell.tabIndex = 0;

    const gridRow = el.row + 1;
    const gridCol = el.col + 1;
    cell.style.gridRow = String(gridRow);
    cell.style.gridColumn = String(gridCol);

    cell.innerHTML = `
      <div class="el-top">
        <span class="el-z">${el.z}</span>
        <span class="el-mass">${el.weightShort}</span>
      </div>
      <div class="el-sym">${el.sym}</div>
      <div class="el-name">${el.nameVi}</div>
    `;

    cell.addEventListener("click", () => openElementModal(el.z));
    cell.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openElementModal(el.z);
      }
    });

    grid.appendChild(cell);
  });

  applyHighlightAndFilter();
}

function renderCategoryBar() {
  const list = document.getElementById("categoryList");
  if (!list) return;
  list.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "cat-chip active";
  allBtn.dataset.cat = "all";
  allBtn.innerHTML = '<span>Tất cả (118)</span>';
  allBtn.addEventListener("click", () => toggleCategoryFilter("all"));
  list.appendChild(allBtn);

  Object.keys(CATEGORY_INFO).forEach((catKey) => {
    const info = CATEGORY_INFO[catKey];
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "cat-chip";
    chip.dataset.cat = catKey;
    chip.innerHTML = `<span class="cat-dot" style="background:${info.color}"></span><span>${info.name}</span>`;
    chip.addEventListener("click", () => toggleCategoryFilter(catKey));
    list.appendChild(chip);
  });
}

function toggleCategoryFilter(catKey) {
  if (catKey === "all") {
    activeCategory = "all";
  } else {
    activeCategory = activeCategory === catKey ? "all" : catKey;
  }
  updateCategoryChipsUI();
  applyHighlightAndFilter();
}

function updateCategoryChipsUI() {
  const chips = document.querySelectorAll(".cat-chip");
  chips.forEach((chip) => {
    if (chip.dataset.cat === activeCategory) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

function elementMatchesFilter(el) {
  const matchesCat = activeCategory === "all" || el.cat === activeCategory;
  if (!searchQuery) {
    return matchesCat;
  }

  const q = normalizeVi(searchQuery);
  const catName = normalizeVi(CATEGORY_INFO[el.cat]?.name || "");
  const nameViNorm = normalizeVi(el.nameVi);
  const nameEnNorm = normalizeVi(el.nameEn);
  const symNorm = el.sym.toLowerCase();
  const zStr = String(el.z);

  const matchesSearch =
    symNorm === q ||
    symNorm.includes(q) ||
    zStr === q ||
    nameViNorm.includes(q) ||
    nameEnNorm.includes(q) ||
    catName.includes(q);

  return matchesCat && matchesSearch;
}

function applyHighlightAndFilter() {
  const cells = document.querySelectorAll(".el-cell");
  const isFiltering = activeCategory !== "all" || searchQuery.trim() !== "";
  let matchCount = 0;

  cells.forEach((cell) => {
    const z = Number(cell.dataset.z);
    const el = ELEMENTS_DATA[z - 1];
    if (!isFiltering) {
      cell.classList.remove("is-highlighted", "is-dimmed");
      matchCount++;
    } else {
      if (elementMatchesFilter(el)) {
        cell.classList.add("is-highlighted");
        cell.classList.remove("is-dimmed");
        matchCount++;
      } else {
        cell.classList.add("is-dimmed");
        cell.classList.remove("is-highlighted");
      }
    }
  });

  const statusBox = document.getElementById("filterStatusBox");
  const statusText = document.getElementById("filterStatusText");
  if (statusBox && statusText) {
    if (!isFiltering) {
      statusBox.style.display = "none";
    } else {
      statusBox.style.display = "inline-flex";
      const catLabel = activeCategory !== "all" ? CATEGORY_INFO[activeCategory].name : "";
      const parts = [];
      if (catLabel) parts.push(catLabel);
      if (searchQuery.trim()) parts.push(`"${searchQuery.trim()}"`);
      statusText.textContent = `Đang làm sáng: ${matchCount} nguyên tố (${parts.join(" • ")})`;
    }
  }
}

function openElementModal(z) {
  const el = ELEMENTS_DATA.find((item) => item.z === Number(z));
  if (!el) return;
  currentElementZ = el.z;

  const catInfo = CATEGORY_INFO[el.cat] || CATEGORY_INFO["transition"];

  const badge = document.getElementById("modalBigBadge");
  badge.style.background = catInfo.bg;
  badge.style.borderColor = catInfo.border;
  badge.style.color = catInfo.text;
  document.getElementById("modalBadgeZ").textContent = el.z;
  document.getElementById("modalBadgeSym").textContent = el.sym;

  document.getElementById("modalFullName").textContent = el.nameVi;
  document.getElementById("modalEnName").textContent = `(${el.nameEn})`;

  const catPill = document.getElementById("modalCatPill");
  catPill.textContent = catInfo.name;
  catPill.style.background = catInfo.bg;
  catPill.style.color = catInfo.text;
  catPill.style.border = `1px solid ${catInfo.border}`;

  document.getElementById("modalPeriodGroupPill").textContent = `Chu kỳ ${el.period} • Nhóm ${el.group}`;

  document.getElementById("propZ").textContent = `${el.z} (${el.z} proton, ${el.z} electron)`;
  document.getElementById("propSym").textContent = el.sym;
  document.getElementById("propName").textContent = `${el.nameVi} — ${el.nameEn}`;
  document.getElementById("propWeight").textContent = `${el.weight} u`;
  document.getElementById("propConfig").textContent = el.config;
  document.getElementById("propShellsText").textContent = `Phân bố lớp vỏ (${el.shells.length} lớp): ${el.shells.join(" – ")}`;
  document.getElementById("propValence").textContent = el.valence;
  document.getElementById("propEN").textContent = el.en !== "—" ? `${el.en} (thang Pauling)` : "Không xác định (—)";
  document.getElementById("propOx").textContent = el.ox;

  document.getElementById("miniHistDiscoverer").textContent = `👤 Phát hiện: ${el.discoverer}`;
  document.getElementById("miniHistYear").textContent = `📅 Năm: ${el.year}`;

  const shellsBar = document.getElementById("atomShellsBar");
  shellsBar.innerHTML = "";
  el.shells.forEach((count, idx) => {
    const isValence = idx === el.shells.length - 1;
    const pill = document.createElement("span");
    pill.className = "shell-pill" + (isValence ? " valence-shell" : "");
    pill.textContent = `Lớp ${SHELL_NAMES[idx]}(n=${idx + 1}): ${count}e`;
    shellsBar.appendChild(pill);
  });

  document.getElementById("atom3dElementLabel").textContent =
    `Mô hình 3D Cấu hình Electron — ${el.sym} (Z = ${el.z})`;

  const backdrop = document.getElementById("elementModalBackdrop");
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";

  startAtom3DModel(el);
}

function closeElementModal() {
  if (atom3DState.isFullscreen) {
    toggleAtom3DFullscreen(false);
  }
  const backdrop = document.getElementById("elementModalBackdrop");
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
  stopAtom3DModel();
}

function navigateElement(delta) {
  let nextZ = currentElementZ + delta;
  if (nextZ < 1) nextZ = 118;
  if (nextZ > 118) nextZ = 1;
  openElementModal(nextZ);
  const histBackdrop = document.getElementById("historyModalBackdrop");
  if (histBackdrop.classList.contains("open")) {
    populateHistoryModal(nextZ);
  }
}

function populateHistoryModal(z) {
  const el = ELEMENTS_DATA.find((item) => item.z === Number(z));
  if (!el) return;
  const catInfo = CATEGORY_INFO[el.cat] || CATEGORY_INFO["transition"];

  document.getElementById("histWindowTitle").textContent =
    `📜 Lịch sử & Câu chuyện Nguyên tố: ${el.nameVi} (${el.sym} – Z=${el.z})`;
  document.getElementById("histDiscovererVal").textContent = el.discoverer;
  document.getElementById("histYearVal").textContent = el.year;
  document.getElementById("histCategoryVal").textContent = `${catInfo.name} (Chu kỳ ${el.period}, Nhóm ${el.group})`;
  document.getElementById("histWeightVal").textContent = `${el.weight} u (IUPAC 2019)`;
  document.getElementById("histStoryText").textContent = el.story;
}

function openHistoryModal() {
  populateHistoryModal(currentElementZ);
  const histBackdrop = document.getElementById("historyModalBackdrop");
  histBackdrop.classList.add("open");
}

function closeHistoryModal() {
  const histBackdrop = document.getElementById("historyModalBackdrop");
  histBackdrop.classList.remove("open");
}

function startAtom3DModel(el) {
  atom3DState.element = el;
  atom3DState.zoom = 1.0;
  atom3DState.rotX = 0.45;
  atom3DState.rotY = -0.5;
  resizeAtomCanvas();

  if (atom3DState.animFrameId) {
    cancelAnimationFrame(atom3DState.animFrameId);
  }

  function animateLoop() {
    if (atom3DState.autoRotate && !atom3DState.isDragging) {
      atom3DState.angleTick += 0.014;
      if (atom3DState.mode === "multi") {
        atom3DState.rotY += 0.0045;
      }
    } else if (atom3DState.autoRotate) {
      atom3DState.angleTick += 0.014;
    }
    drawAtom3DScene();
    atom3DState.animFrameId = requestAnimationFrame(animateLoop);
  }

  atom3DState.animFrameId = requestAnimationFrame(animateLoop);
}

function stopAtom3DModel() {
  if (atom3DState.animFrameId) {
    cancelAnimationFrame(atom3DState.animFrameId);
    atom3DState.animFrameId = null;
  }
}

function resizeAtomCanvas() {
  const stage = document.getElementById("atomCanvasStage");
  const canvas = document.getElementById("atom3dCanvas");
  if (!stage || !canvas) return;

  const rect = stage.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  const w = Math.max(Math.floor(rect.width), 200);
  const h = Math.max(Math.floor(rect.height), 200);

  if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
  }
  drawAtom3DScene();
}

function rotate3DPoint(x, y, z, rx, ry, rz) {
  let x1 = x * Math.cos(rz) - y * Math.sin(rz);
  let y1 = x * Math.sin(rz) + y * Math.cos(rz);
  let z1 = z;

  let y2 = y1 * Math.cos(rx) - z1 * Math.sin(rx);
  let z2 = y1 * Math.sin(rx) + z1 * Math.cos(rx);
  let x2 = x1;

  let x3 = x2 * Math.cos(ry) + z2 * Math.sin(ry);
  let z3 = -x2 * Math.sin(ry) + z2 * Math.cos(ry);
  let y3 = y2;

  return { x: x3, y: y3, z: z3 };
}

function drawAtom3DScene() {
  const canvas = document.getElementById("atom3dCanvas");
  if (!canvas || !atom3DState.element) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;

  const baseUnit = Math.min(w, h) * 0.41 * atom3DState.zoom;
  const fov = Math.min(w, h) * 1.9;

  const el = atom3DState.element;
  const shells = el.shells;
  const numShells = shells.length;
  const maxRadius = baseUnit;
  const minRadius = baseUnit * 0.24;
  const radiusStep = numShells > 1 ? (maxRadius - minRadius) / (numShells - 1) : 0;

  const shellTilts = [
    { tx: 0.0, tz: 0.0 },
    { tx: 0.52, tz: 0.45 },
    { tx: -0.48, tz: 0.95 },
    { tx: 0.72, tz: -0.55 },
    { tx: -0.68, tz: -0.85 },
    { tx: 0.35, tz: 1.25 },
    { tx: -0.35, tz: -1.35 }
  ];

  const renderQueue = [];
  const SEGMENTS = 72;

  for (let s = 0; s < numShells; s++) {
    const r = numShells === 1 ? baseUnit * 0.55 : minRadius + s * radiusStep;
    const isValenceShell = s === numShells - 1;
    const tilt = atom3DState.mode === "multi" ? shellTilts[s % shellTilts.length] : { tx: 0, tz: 0 };

    let prevPt = null;
    for (let i = 0; i <= SEGMENTS; i++) {
      const theta = (i / SEGMENTS) * Math.PI * 2;
      const lx = r * Math.cos(theta);
      const ly = r * Math.sin(theta);
      const lz = 0;

      const tilted = rotate3DPoint(lx, ly, lz, tilt.tx, 0, tilt.tz);
      const world = rotate3DPoint(tilted.x, tilted.y, tilted.z, atom3DState.rotX, atom3DState.rotY, 0);

      if (prevPt) {
        renderQueue.push({
          type: "orbitSegment",
          z: (prevPt.z + world.z) * 0.5,
          p1: prevPt,
          p2: world,
          isValence: isValenceShell
        });
      }
      prevPt = world;
    }

    const eCount = shells[s];
    const angularSpeed = (1.35 / (s + 1.15)) * (s % 2 === 0 ? 1 : -1);
    for (let e = 0; e < eCount; e++) {
      const theta = (e / eCount) * Math.PI * 2 + atom3DState.angleTick * angularSpeed;
      const lx = r * Math.cos(theta);
      const ly = r * Math.sin(theta);
      const tilted = rotate3DPoint(lx, ly, 0, tilt.tx, 0, tilt.tz);
      const world = rotate3DPoint(tilted.x, tilted.y, tilted.z, atom3DState.rotX, atom3DState.rotY, 0);

      renderQueue.push({
        type: "electron",
        z: world.z,
        x: world.x,
        y: world.y,
        isValence: isValenceShell,
        shellIndex: s
      });
    }
  }

  renderQueue.push({
    type: "nucleus",
    z: 0,
    x: 0,
    y: 0
  });

  renderQueue.sort((a, b) => a.z - b.z);

  const dpr = Math.min(window.devicePixelRatio || 1, 2.5);

  renderQueue.forEach((item) => {
    if (item.type === "orbitSegment") {
      const scale1 = fov / (fov - item.p1.z);
      const scale2 = fov / (fov - item.p2.z);
      const x1 = cx + item.p1.x * scale1;
      const y1 = cy + item.p1.y * scale1;
      const x2 = cx + item.p2.x * scale2;
      const y2 = cy + item.p2.y * scale2;

      const depthAlpha = Math.max(0.16, Math.min(0.78, 0.45 + (item.z / (maxRadius * 1.2)) * 0.32));
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = item.isValence
        ? `rgba(250, 204, 21, ${depthAlpha})`
        : `rgba(56, 189, 248, ${depthAlpha})`;
      ctx.lineWidth = (item.isValence ? 1.8 : 1.25) * dpr;
      ctx.stroke();
    } else if (item.type === "nucleus") {
      const nucRadius = Math.max(15 * dpr, baseUnit * 0.125);

      const glow = ctx.createRadialGradient(cx, cy, nucRadius * 0.2, cx, cy, nucRadius * 2.1);
      glow.addColorStop(0, "rgba(244, 63, 94, 0.55)");
      glow.addColorStop(1, "rgba(244, 63, 94, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, nucRadius * 2.1, 0, Math.PI * 2);
      ctx.fill();

      const grad = ctx.createRadialGradient(
        cx - nucRadius * 0.3,
        cy - nucRadius * 0.3,
        nucRadius * 0.1,
        cx,
        cy,
        nucRadius
      );
      grad.addColorStop(0, "#fda4af");
      grad.addColorStop(0.45, "#e11d48");
      grad.addColorStop(1, "#881337");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, nucRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.font = `800 ${Math.max(10 * dpr, nucRadius * 0.68)}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${el.sym}`, cx, cy);
    } else if (item.type === "electron") {
      const scale = fov / (fov - item.z);
      const sx = cx + item.x * scale;
      const sy = cy + item.y * scale;
      const eRadius = Math.max(3.6 * dpr, baseUnit * 0.028 * scale);

      const glowRadius = eRadius * 2.3;
      const glow = ctx.createRadialGradient(sx, sy, eRadius * 0.2, sx, sy, glowRadius);
      if (item.isValence) {
        glow.addColorStop(0, "rgba(250, 204, 21, 0.85)");
        glow.addColorStop(1, "rgba(250, 204, 21, 0)");
      } else {
        glow.addColorStop(0, "rgba(56, 189, 248, 0.75)");
        glow.addColorStop(1, "rgba(56, 189, 248, 0)");
      }
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(sx, sy, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      const eGrad = ctx.createRadialGradient(
        sx - eRadius * 0.35,
        sy - eRadius * 0.35,
        eRadius * 0.1,
        sx,
        sy,
        eRadius
      );
      if (item.isValence) {
        eGrad.addColorStop(0, "#fef9c3");
        eGrad.addColorStop(0.55, "#facc15");
        eGrad.addColorStop(1, "#ca8a04");
      } else {
        eGrad.addColorStop(0, "#e0f2fe");
        eGrad.addColorStop(0.55, "#38bdf8");
        eGrad.addColorStop(1, "#0369a1");
      }
      ctx.fillStyle = eGrad;
      ctx.beginPath();
      ctx.arc(sx, sy, eRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

function toggleAtom3DFullscreen(forceState) {
  const wrapper = document.getElementById("atom3dWrapper");
  const btn = document.getElementById("btnExpand3D");
  if (!wrapper || !btn) return;

  const nextState = typeof forceState === "boolean" ? forceState : !atom3DState.isFullscreen;
  atom3DState.isFullscreen = nextState;

  if (nextState) {
    wrapper.classList.add("fullscreen-3d");
    btn.textContent = "🗗 Thu nhỏ 3D";
    btn.title = "Thu nhỏ cửa sổ mô hình 3D về kích thước ban đầu";
  } else {
    wrapper.classList.remove("fullscreen-3d");
    btn.textContent = "⛶ Toàn màn hình 3D";
    btn.title = "Mở rộng riêng cửa sổ mô hình 3D ra toàn màn hình web";
  }

  requestAnimationFrame(() => {
    resizeAtomCanvas();
    setTimeout(resizeAtomCanvas, 60);
  });
}

function setupAtom3DInteractions() {
  const stage = document.getElementById("atomCanvasStage");
  if (!stage) return;

  stage.addEventListener("mousedown", (e) => {
    atom3DState.isDragging = true;
    atom3DState.lastMouseX = e.clientX;
    atom3DState.lastMouseY = e.clientY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!atom3DState.isDragging) return;
    const dx = e.clientX - atom3DState.lastMouseX;
    const dy = e.clientY - atom3DState.lastMouseY;
    atom3DState.lastMouseX = e.clientX;
    atom3DState.lastMouseY = e.clientY;
    atom3DState.rotY += dx * 0.008;
    atom3DState.rotX += dy * 0.008;
  });

  window.addEventListener("mouseup", () => {
    atom3DState.isDragging = false;
  });

  stage.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.1 : 0.9;
      atom3DState.zoom = Math.max(0.45, Math.min(2.6, atom3DState.zoom * factor));
    },
    { passive: false }
  );

  stage.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 1) {
        atom3DState.isDragging = true;
        atom3DState.lastMouseX = e.touches[0].clientX;
        atom3DState.lastMouseY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        atom3DState.isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        atom3DState.pinchStartDist = Math.hypot(dx, dy);
        atom3DState.pinchStartZoom = atom3DState.zoom;
      }
    },
    { passive: true }
  );

  stage.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length === 1 && atom3DState.isDragging) {
        e.preventDefault();
        const dx = e.touches[0].clientX - atom3DState.lastMouseX;
        const dy = e.touches[0].clientY - atom3DState.lastMouseY;
        atom3DState.lastMouseX = e.touches[0].clientX;
        atom3DState.lastMouseY = e.touches[0].clientY;
        atom3DState.rotY += dx * 0.009;
        atom3DState.rotX += dy * 0.009;
      } else if (e.touches.length === 2 && atom3DState.pinchStartDist > 0) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const ratio = dist / atom3DState.pinchStartDist;
        atom3DState.zoom = Math.max(0.45, Math.min(2.6, atom3DState.pinchStartZoom * ratio));
      }
    },
    { passive: false }
  );

  stage.addEventListener("touchend", () => {
    atom3DState.isDragging = false;
  });

  document.getElementById("btnZoomIn3D").addEventListener("click", () => {
    atom3DState.zoom = Math.min(2.6, atom3DState.zoom * 1.18);
  });

  document.getElementById("btnZoomOut3D").addEventListener("click", () => {
    atom3DState.zoom = Math.max(0.45, atom3DState.zoom / 1.18);
  });

  document.getElementById("btnReset3D").addEventListener("click", () => {
    atom3DState.zoom = 1.0;
    atom3DState.rotX = 0.45;
    atom3DState.rotY = -0.5;
  });

  const btnTogglePlay = document.getElementById("btnTogglePlay3D");
  btnTogglePlay.addEventListener("click", () => {
    atom3DState.autoRotate = !atom3DState.autoRotate;
    btnTogglePlay.textContent = atom3DState.autoRotate ? "⏸ Dừng quay" : "▶ Tiếp tục quay";
  });

  const btnMode3D = document.getElementById("btnMode3D");
  btnMode3D.addEventListener("click", () => {
    atom3DState.mode = atom3DState.mode === "multi" ? "bohr" : "multi";
    btnMode3D.textContent = atom3DState.mode === "multi" ? "🌐 3D Đa trục" : "◎ 3D Lớp Bohr";
    if (atom3DState.mode === "bohr") {
      atom3DState.rotX = 0.35;
      atom3DState.rotY = 0.0;
    }
  });

  document.getElementById("btnExpand3D").addEventListener("click", () => {
    toggleAtom3DFullscreen();
  });

  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(() => resizeAtomCanvas());
    ro.observe(stage);
  }
  window.addEventListener("resize", resizeAtomCanvas);
}

function initApp() {
  renderCategoryBar();
  renderPeriodicTable();
  setupAtom3DInteractions();

  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      clearSearchBtn.classList.add("visible");
    } else {
      clearSearchBtn.classList.remove("visible");
    }
    applyHighlightAndFilter();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.remove("visible");
    applyHighlightAndFilter();
    searchInput.focus();
  });

  document.getElementById("btnResetFilter").addEventListener("click", () => {
    activeCategory = "all";
    searchQuery = "";
    searchInput.value = "";
    clearSearchBtn.classList.remove("visible");
    updateCategoryChipsUI();
    applyHighlightAndFilter();
  });

  const btnCompactToggle = document.getElementById("btnCompactToggle");
  btnCompactToggle.addEventListener("click", () => {
    isCompactMobile = !isCompactMobile;
    const grid = document.getElementById("periodicGrid");
    grid.classList.toggle("compact-mobile-fit", isCompactMobile);
    btnCompactToggle.textContent = isCompactMobile ? "🔍 Kích thước chuẩn" : "📱 Thu gọn bảng";
  });

  document.getElementById("btnCloseElementModal").addEventListener("click", closeElementModal);
  document.getElementById("btnPrevElement").addEventListener("click", () => navigateElement(-1));
  document.getElementById("btnNextElement").addEventListener("click", () => navigateElement(1));

  document.getElementById("elementModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "elementModalBackdrop") {
      closeElementModal();
    }
  });

  document.getElementById("historyMiniCard").addEventListener("click", openHistoryModal);
  document.getElementById("btnOpenHistoryModal").addEventListener("click", (e) => {
    e.stopPropagation();
    openHistoryModal();
  });
  document.getElementById("btnCloseHistoryModal").addEventListener("click", closeHistoryModal);
  document.getElementById("btnBackToElementModal").addEventListener("click", closeHistoryModal);
  document.getElementById("btnHistPrevEl").addEventListener("click", () => navigateElement(-1));
  document.getElementById("btnHistNextEl").addEventListener("click", () => navigateElement(1));

  document.getElementById("historyModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "historyModalBackdrop") {
      closeHistoryModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    const histOpen = document.getElementById("historyModalBackdrop").classList.contains("open");
    const elOpen = document.getElementById("elementModalBackdrop").classList.contains("open");

    if (e.key === "Escape") {
      if (atom3DState.isFullscreen) {
        toggleAtom3DFullscreen(false);
      } else if (histOpen) {
        closeHistoryModal();
      } else if (elOpen) {
        closeElementModal();
      }
    } else if (elOpen && e.key === "ArrowLeft") {
      navigateElement(-1);
    } else if (elOpen && e.key === "ArrowRight") {
      navigateElement(1);
    }
  });
}

document.addEventListener("DOMContentLoaded", initApp);
