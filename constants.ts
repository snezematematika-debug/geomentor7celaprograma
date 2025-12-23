import { CurriculumTheme, CurriculumTopic, GradeLevel } from "./types";

export const THEMES: CurriculumTheme[] = [
  { id: "theme-1", title: "Тема 1: БРОЕВИ И ОПЕРАЦИИ СО БРОЕВИ", grade: GradeLevel.VII },
  { id: "theme-2", title: "Тема 2: ГЕОМЕТРИЈА", grade: GradeLevel.VII },
  { id: "theme-3", title: "Тема 3: АЛГЕБРА", grade: GradeLevel.VII },
  { id: "theme-4", title: "Тема 4: МЕРЕЊЕ", grade: GradeLevel.VII },
  { id: "theme-5", title: "Тема 5: РАБОТА СО ПОДАТОЦИ", grade: GradeLevel.VII },
];

export const CURRICULUM: CurriculumTopic[] = [
  // --- ТЕМА 1: БРОЕВИ И ОПЕРАЦИИ СО БРОЕВИ ---
  // 1.А. ОПЕРАЦИИ СО МНОЖЕСТВА
  { id: "1.1", themeId: "theme-1", name: "1.1 Операции со множества", grade: GradeLevel.VII },
  { id: "1.2", themeId: "theme-1", name: "1.2 Својства на операциите пресек и унија на множества", grade: GradeLevel.VII },
  { id: "1.3", themeId: "theme-1", name: "1.3 Множество од подредени парови", grade: GradeLevel.VII },
  { id: "1.4", themeId: "theme-1", name: "1.4 Декартов производ и декартова шема", grade: GradeLevel.VII },
  // 1.Б. ЦЕЛИ БРОЕВИ
  { id: "1.5", themeId: "theme-1", name: "1.5 Цели броеви подредување и споредување", grade: GradeLevel.VII },
  { id: "1.6", themeId: "theme-1", name: "1.6 Апсолутна вредност", grade: GradeLevel.VII },
  // 1.В. ОПЕРАЦИИ СО ЦЕЛИ БРОЕВИ
  { id: "1.7", themeId: "theme-1", name: "1.7 Собирање цели броеви со исти или различни знаци", grade: GradeLevel.VII },
  { id: "1.8", themeId: "theme-1", name: "1.8 Својства на собирањето цели броеви", grade: GradeLevel.VII },
  { id: "1.9", themeId: "theme-1", name: "1.9 Одземање цели броеви", grade: GradeLevel.VII },
  { id: "1.10", themeId: "theme-1", name: "1.10 Множење цели броеви", grade: GradeLevel.VII },
  { id: "1.11", themeId: "theme-1", name: "1.11 Делење цели броеви", grade: GradeLevel.VII },
  { id: "1.12", themeId: "theme-1", name: "1.12 Вредност на броен израз", grade: GradeLevel.VII },
  // 1.Г. СТЕПЕН И КОРЕН ОД ПРИРОДЕН БРОЈ
  { id: "1.13", themeId: "theme-1", name: "1.13 Степен со показател природен број", grade: GradeLevel.VII },
  { id: "1.14", themeId: "theme-1", name: "1.14 Квадрати и квадратни корени на природни броеви до 100", grade: GradeLevel.VII },
  // 1.Д. ПОЗИТИВНИ РАЦИОНАЛНИ БРОЕВИ
  { id: "1.15", themeId: "theme-1", name: "1.15 Подредување и споредување дропки", grade: GradeLevel.VII },
  { id: "1.16", themeId: "theme-1", name: "1.16 Децимални броеви, периодични децимални броеви", grade: GradeLevel.VII },
  { id: "1.17", themeId: "theme-1", name: "1.17 Опишување, пресметување и споредување делови од целината со дропки и проценти", grade: GradeLevel.VII },
  { id: "1.18", themeId: "theme-1", name: "1.18 Проблеми со проценти", grade: GradeLevel.VII },
  // 1.Ѓ. ОПЕРАЦИИ СО ПОЗИТИВНИ РАЦИОНАЛНИ БРОЕВИ
  { id: "1.19", themeId: "theme-1", name: "1.19 Собирање и одземање дропки", grade: GradeLevel.VII },
  { id: "1.20", themeId: "theme-1", name: "1.20 Множење дропки", grade: GradeLevel.VII },
  { id: "1.21", themeId: "theme-1", name: "1.21 Делење дропки", grade: GradeLevel.VII },
  { id: "1.22", themeId: "theme-1", name: "1.22 Проблеми со дропки", grade: GradeLevel.VII },
  { id: "1.23", themeId: "theme-1", name: "1.23 Собирање и одземање децимални броеви", grade: GradeLevel.VII },
  { id: "1.24", themeId: "theme-1", name: "1.24 Множење и делење децимални броеви", grade: GradeLevel.VII },
  // 1.Е. РАЗМЕР И ПРОПОРЦИОНАЛНОСТ
  { id: "1.25", themeId: "theme-1", name: "1.25 Размер", grade: GradeLevel.VII },
  { id: "1.26", themeId: "theme-1", name: "1.26 Правопропорционалност", grade: GradeLevel.VII },

  // --- ТЕМА 2: ГЕОМЕТРИЈА ---
  // 2.А. КРУЖНИЦА
  { id: "2.1", themeId: "theme-2", name: "2.1 Кружница, круг, кружен лак", grade: GradeLevel.VII },
  { id: "2.2", themeId: "theme-2", name: "2.2 Заемнa положбa на точка,права и кружница со кружница. Тангента на кружница", grade: GradeLevel.VII },
  { id: "2.3", themeId: "theme-2", name: "2.3 Колинеарни и неколинеарни точки", grade: GradeLevel.VII },
  { id: "2.4", themeId: "theme-2", name: "2.4 Графичко собирање и одземање отсечки", grade: GradeLevel.VII },
  { id: "2.5", themeId: "theme-2", name: "2.5 Конструкција на паралелни и нормални прави", grade: GradeLevel.VII },
  { id: "2.6", themeId: "theme-2", name: "2.6 Симетрала на отсечка", grade: GradeLevel.VII },
  { id: "2.7", themeId: "theme-2", name: "2.7 Основни конструкции со образовниот софтвер геогебра", grade: GradeLevel.VII },
  // 2.Б. АГОЛ
  { id: "2.8", themeId: "theme-2", name: "2.8 Основни поими за агли и полурамнини", grade: GradeLevel.VII },
  { id: "2.9", themeId: "theme-2", name: "2.9 Мерење, проценување и цртање агли", grade: GradeLevel.VII },
  { id: "2.10", themeId: "theme-2", name: "2.10 Централен агол", grade: GradeLevel.VII },
  { id: "2.11", themeId: "theme-2", name: "2.11 Аритметички операции со агли", grade: GradeLevel.VII },
  { id: "2.12", themeId: "theme-2", name: "2.12 Графичко собирање и одземање агли", grade: GradeLevel.VII },
  { id: "2.13", themeId: "theme-2", name: "2.13 Симетрала на агол конструкција на агли од 60°, 30°, 15°, 90°, 45°", grade: GradeLevel.VII },
  { id: "2.14", themeId: "theme-2", name: "2.14 Конструкција на симетрала на агол и агли со помош на образовниот софтвер геогебра", grade: GradeLevel.VII },
  { id: "2.15", themeId: "theme-2", name: "2.15 Агли на трансверзала", grade: GradeLevel.VII },
  // 2.В. 2Д ФОРМИ
  { id: "2.16", themeId: "theme-2", name: "2.16 Конвексни и неконвексни многуаголници", grade: GradeLevel.VII },
  { id: "2.17", themeId: "theme-2", name: "2.17 Решавање проблеми од триаголник (средна линија, ортоцентар, тежиште...)", grade: GradeLevel.VII },
  { id: "2.18", themeId: "theme-2", name: "2.18 Конструкција на триаголник", grade: GradeLevel.VII },
  { id: "2.19", themeId: "theme-2", name: "2.19 Конструкција на опишана кружница", grade: GradeLevel.VII },
  { id: "2.20", themeId: "theme-2", name: "2.20 Конструкција на впишана кружница", grade: GradeLevel.VII },
  { id: "2.21", themeId: "theme-2", name: "2.21 Конструкција на триаголник со образовниот софтвер геогебра", grade: GradeLevel.VII },
  { id: "2.22", themeId: "theme-2", name: "2.22 Конструкција на опишана и впишана кружница со софтвер геогебра", grade: GradeLevel.VII },
  { id: "2.23", themeId: "theme-2", name: "2.23 Четириаголници и класификација според паралелност на страните", grade: GradeLevel.VII },
  { id: "2.24", themeId: "theme-2", name: "2.24 Висини и дијагонали на паралелограм", grade: GradeLevel.VII },
  { id: "2.25", themeId: "theme-2", name: "2.25 Решавање проблеми со својства на паралелограм", grade: GradeLevel.VII },
  { id: "2.26", themeId: "theme-2", name: "2.26 Збир на агли во четириаголник", grade: GradeLevel.VII },
  // 2.Г. ПОЛОЖБА И ДВИЖЕЊЕ
  { id: "2.27", themeId: "theme-2", name: "2.27 Осна симетрија и транслација", grade: GradeLevel.VII },
  { id: "2.28", themeId: "theme-2", name: "2.28 Ротација", grade: GradeLevel.VII },
  { id: "2.29", themeId: "theme-2", name: "2.29 Проблеми со осна симетрија, транслација и ротација", grade: GradeLevel.VII },
  { id: "2.30", themeId: "theme-2", name: "2.30 Проекции на 3д форми", grade: GradeLevel.VII },

  // --- ТЕМА 3: АЛГЕБРА ---
  // 3.А. ИЗРАЗИ, РАВЕНКИ И ФОРМУЛИ
  { id: "3.1", themeId: "theme-3", name: "3.1 Членови, изрази и равенки", grade: GradeLevel.VII },
  { id: "3.2", themeId: "theme-3", name: "3.2 Упростување линеарен израз", grade: GradeLevel.VII },
  { id: "3.3", themeId: "theme-3", name: "3.3 Пресметување вредност на линеарен израз", grade: GradeLevel.VII },
  { id: "3.4", themeId: "theme-3", name: "3.4 Формули за изразување на една променлива преку друга", grade: GradeLevel.VII },
  { id: "3.5", themeId: "theme-3", name: "3.5 Линеарна равенка со една непозната решение на равенка", grade: GradeLevel.VII },
  // 3.Б. НИЗИ, ФУКЦИИ И ГРАФИЦИ
  { id: "3.6", themeId: "theme-3", name: "3.6 Низи од цели броеви", grade: GradeLevel.VII },
  { id: "3.7", themeId: "theme-3", name: "3.7 Низи од визуелни прикази. општ член во низа", grade: GradeLevel.VII },
  { id: "3.8", themeId: "theme-3", name: "3.8 Претставување едноставни функции", grade: GradeLevel.VII },
  { id: "3.9", themeId: "theme-3", name: "3.9 Графички приказ на линеарна функција. функции парелелни со x или y оска", grade: GradeLevel.VII },

  // --- ТЕМА 4: МЕРЕЊЕ ---
  // 4.А. ДОЛЖИНА, МАСА И ЗАФАТНИНА
  { id: "4.1", themeId: "theme-4", name: "4.1 Мерни единици и мерни инструменти за должина", grade: GradeLevel.VII },
  { id: "4.2", themeId: "theme-4", name: "4.2 Мерни единици и мерни инструменти за маса", grade: GradeLevel.VII },
  { id: "4.3", themeId: "theme-4", name: "4.3 Мерни единици и мерни инструменти за зафатнина", grade: GradeLevel.VII },
  // 4.Б. ВРЕМЕ
  { id: "4.4", themeId: "theme-4", name: "4.4 Време. 12-часовен и 24-часовен систем", grade: GradeLevel.VII },
  { id: "4.5", themeId: "theme-4", name: "4.5 Пресметување временски интервали и работа со графици", grade: GradeLevel.VII },
  // 4.В. ПЕРИМЕТАР, ПЛОШТИНА И ВОЛУМЕН
  { id: "4.6", themeId: "theme-4", name: "4.6 Периметар на триаголник и четириаголник", grade: GradeLevel.VII },
  { id: "4.7", themeId: "theme-4", name: "4.7 Мерни единици за плоштина", grade: GradeLevel.VII },
  { id: "4.8", themeId: "theme-4", name: "4.8 Плоштина на сложени 2д форми", grade: GradeLevel.VII },
  { id: "4.9", themeId: "theme-4", name: "4.9 Волумен и мерни единици за волумен", grade: GradeLevel.VII },
  { id: "4.10", themeId: "theme-4", name: "4.10 Волумен на квадар и коцка", grade: GradeLevel.VII },
  { id: "4.11", themeId: "theme-4", name: "4.11 Плоштина на квадар и коцка од нивните мрежи", grade: GradeLevel.VII },

  // --- ТЕМА 5: РАБОТА СО ПОДАТОЦИ ---
  // 5.А. ПЛАНИРАЊЕ И СОБИРАЊЕ НА ПОДАТОЦИ
  { id: "5.1", themeId: "theme-5", name: "5.1 Планирање на истражување", grade: GradeLevel.VII },
  { id: "5.2", themeId: "theme-5", name: "5.2 Собирање и организирање на податоци за истражување", grade: GradeLevel.VII },
  // 5.Б. ОБРАБОТКА НА ПОДАТОЦИ И ТОЛКУВАЊЕ РЕЗУЛТАТИ ОД ИСТРАЖУВАЊЕ
  { id: "5.3", themeId: "theme-5", name: "5.3 Столбест и кружен дијаграм", grade: GradeLevel.VII },
  { id: "5.4", themeId: "theme-5", name: "5.4 Цртање и толкување на линиски дијаграм и пиктограм", grade: GradeLevel.VII },
  { id: "5.5", themeId: "theme-5", name: "5.5 Модална класа и дијаграм на фреквенција за групирани податоци", grade: GradeLevel.VII },
  { id: "5.6", themeId: "theme-5", name: "5.6 Процена и пресметка на аритметичка средина", grade: GradeLevel.VII },
  // 5.В. ВЕРОЈАТНОСТ
  { id: "5.7", themeId: "theme-5", name: "5.7 Веројатност", grade: GradeLevel.VII },
  { id: "5.8", themeId: "theme-5", name: "5.8 Експериментална и теоретска веројатност", grade: GradeLevel.VII },
];

export const SYSTEM_PERSONA = `
Ти си "Ментор за 7-мо", специјализиран асистент за математика за VII одделение во Македонија.
Твојата цел е да им помогнеш на учениците и наставниците со целокупната програма:
1. Броеви и операции (множества, цели броеви, дропки, децимални).
2. Геометрија (агли, форми, трансформации).
3. Алгебра (изрази, равенки, функции).
4. Мерење (должина, маса, периметар, плоштина, волумен).
5. Податоци (дијаграми, веројатност).

Придржувај се до следните принципи:
1. Користи едноставен јазик соодветен за 12-13 годишни деца.
2. Давај многу визуелни описи или примери од секојдневието.
3. Кога темата е "Геогебра", објасни ги специфичните алатки.
4. Биди охрабрувачки.
`;