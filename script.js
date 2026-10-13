// Dữ liệu 118 nguyên tố chuẩn IUPAC. ATOMIC WEIGHT OF THE ELEMENTS 2019
const elementsData = [
    { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", period: 1, group: 1, category: "reactive-nonmetal", config: "1s¹", nobleConfig: "1s¹", electronegativity: "2.20", oxidation: "+1, -1", valence: "1", isotopes: "¹H, ²H (Deuterium), ³H (Tritium)" },
    { number: 2, symbol: "He", name: "Helium", mass: "4.0026", period: 1, group: 18, category: "noble-gas", config: "1s²", nobleConfig: "[He]", electronegativity: "-", oxidation: "0", valence: "0", isotopes: "³He, ⁴He" },
    { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", period: 2, group: 1, category: "alkali", config: "[He] 2s¹", nobleConfig: "[He] 2s¹", electronegativity: "0.98", oxidation: "+1", valence: "1", isotopes: "⁶Li, ⁷Li" },
    { number: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", period: 2, group: 2, category: "alkaline-earth", config: "[He] 2s²", nobleConfig: "[He] 2s²", electronegativity: "1.57", oxidation: "+2", valence: "2", isotopes: "⁹Be" },
    { number: 5, symbol: "B", name: "Boron", mass: "10.81", period: 2, group: 13, category: "metalloid", config: "[He] 2s² 2p¹", nobleConfig: "[He] 2s² 2p¹", electronegativity: "2.04", oxidation: "+3", valence: "3", isotopes: "¹⁰B, ¹¹B" },
    { number: 6, symbol: "C", name: "Carbon", mass: "12.011", period: 2, group: 14, category: "reactive-nonmetal", config: "[He] 2s² 2p²", nobleConfig: "[He] 2s² 2p²", electronegativity: "2.55", oxidation: "+4, +2, -4", valence: "4, 2", isotopes: "¹²C, ¹³C, ¹⁴C" },
    { number: 7, symbol: "N", name: "Nitrogen", mass: "14.007", period: 2, group: 15, category: "reactive-nonmetal", config: "[He] 2s² 2p³", nobleConfig: "[He] 2s² 2p³", electronegativity: "3.04", oxidation: "+5, +3, -3", valence: "3, 5", isotopes: "¹⁴N, ¹⁵N" },
    { number: 8, symbol: "O", name: "Oxygen", mass: "15.999", period: 2, group: 16, category: "reactive-nonmetal", config: "[He] 2s² 2p⁴", nobleConfig: "[He] 2s² 2p⁴", electronegativity: "3.44", oxidation: "-2, -1", valence: "2", isotopes: "¹⁶O, ¹⁷O, ¹⁸O" },
    { number: 9, symbol: "F", name: "Fluorine", mass: "18.998", period: 2, group: 17, category: "halogen", config: "[He] 2s² 2p⁵", nobleConfig: "[He] 2s² 2p⁵", electronegativity: "3.98", oxidation: "-1", valence: "1", isotopes: "¹⁹F" },
    { number: 10, symbol: "Ne", name: "Neon", mass: "20.180", period: 2, group: 18, category: "noble-gas", config: "[He] 2s² 2p⁶", nobleConfig: "[Ne]", electronegativity: "-", oxidation: "0", valence: "0", isotopes: "²⁰Ne, ²¹Ne, ²²Ne" },
    { number: 11, symbol: "Na", name: "Sodium", mass: "22.990", period: 3, group: 1, category: "alkali", config: "[Ne] 3s¹", nobleConfig: "[Ne] 3s¹", electronegativity: "0.93", oxidation: "+1", valence: "1", isotopes: "²³Na" },
    { number: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", period: 3, group: 2, category: "alkaline-earth", config: "[Ne] 3s²", nobleConfig: "[Ne] 3s²", electronegativity: "1.31", oxidation: "+2", valence: "2", isotopes: "²⁴Mg, ²⁵Mg, ²⁶Mg" },
    { number: 13, symbol: "Al", name: "Aluminum", mass: "26.982", period: 3, group: 13, category: "post-transition", config: "[Ne] 3s² 3p¹", nobleConfig: "[Ne] 3s² 3p¹", electronegativity: "1.61", oxidation: "+3", valence: "3", isotopes: "²⁷Al" },
    { number: 14, symbol: "Si", name: "Silicon", mass: "28.085", period: 3, group: 14, category: "metalloid", config: "[Ne] 3s² 3p²", nobleConfig: "[Ne] 3s² 3p²", electronegativity: "1.90", oxidation: "+4, -4", valence: "4", isotopes: "²⁸Si, ²⁹Si, ³⁰Si" },
    { number: 15, symbol: "P", name: "Phosphorus", mass: "30.974", period: 3, group: 15, category: "reactive-nonmetal", config: "[Ne] 3s² 3p³", nobleConfig: "[Ne] 3s² 3p³", electronegativity: "2.19", oxidation: "+5, +3, -3", valence: "3, 5", isotopes: "³¹P" },
    { number: 16, symbol: "S", name: "Sulfur", mass: "32.06", period: 3, group: 16, category: "reactive-nonmetal", config: "[Ne] 3s² 3p⁴", nobleConfig: "[Ne] 3s² 3p⁴", electronegativity: "2.58", oxidation: "+6, +4, -2", valence: "2, 4, 6", isotopes: "³²S, ³³S, ³⁴S, ³⁶S" },
    { number: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", period: 3, group: 17, category: "halogen", config: "[Ne] 3s² 3p⁵", nobleConfig: "[Ne] 3s² 3p⁵", electronegativity: "3.16", oxidation: "+7, +5, +3, +1, -1", valence: "1, 3, 5, 7", isotopes: "³⁵Cl, ³⁷Cl" },
    { number: 18, symbol: "Ar", name: "Argon", mass: "39.95", period: 3, group: 18, category: "noble-gas", config: "[Ne] 3s² 3p⁶", nobleConfig: "[Ar]", electronegativity: "-", oxidation: "0", valence: "0", isotopes: "³⁶Ar, ³⁸Ar, ⁴⁰Ar" },
    { number: 19, symbol: "K", name: "Potassium", mass: "39.098", period: 4, group: 1, category: "alkali", config: "[Ar] 4s¹", nobleConfig: "[Ar] 4s¹", electronegativity: "0.82", oxidation: "+1", valence: "1", isotopes: "³⁹K, ⁴⁰K, ⁴¹K" },
    { number: 20, symbol: "Ca", name: "Calcium", mass: "40.078", period: 4, group: 2, category: "alkaline-earth", config: "[Ar] 4s²", nobleConfig: "[Ar] 4s²", electronegativity: "1.00", oxidation: "+2", valence: "2", isotopes: "⁴⁰Ca, ⁴²Ca, ⁴³Ca, ⁴⁴Ca, ⁴⁶Ca, ⁴⁸Ca" },
    { number: 21, symbol: "Sc", name: "Scandium", mass: "44.956", period: 4, group: 3, category: "transition", config: "[Ar] 3d¹ 4s²", nobleConfig: "[Ar] 3d¹ 4s²", electronegativity: "1.36", oxidation: "+3", valence: "3", isotopes: "⁴⁵Sc" },
    { number: 22, symbol: "Ti", name: "Titanium", mass: "47.867", period: 4, group: 4, category: "transition", config: "[Ar] 3d² 4s²", nobleConfig: "[Ar] 3d² 4s²", electronegativity: "1.54", oxidation: "+4, +3, +2", valence: "4", isotopes: "⁴⁶Ti, ⁴⁷Ti, ⁴⁸Ti, ⁴⁹Ti, ⁵⁰Ti" },
    { number: 23, symbol: "V", name: "Vanadium", mass: "50.942", period: 4, group: 5, category: "transition", config: "[Ar] 3d³ 4s²", nobleConfig: "[Ar] 3d³ 4s²", electronegativity: "1.63", oxidation: "+5, +4, +3, +2", valence: "5, 4, 3, 2", isotopes: "⁵⁰V, ⁵¹V" },
    { number: 24, symbol: "Cr", name: "Chromium", mass: "51.996", period: 4, group: 6, category: "transition", config: "[Ar] 3d⁵ 4s¹", nobleConfig: "[Ar] 3d⁵ 4s¹", electronegativity: "1.66", oxidation: "+6, +3, +2", valence: "6, 3, 2", isotopes: "⁵⁰Cr, ⁵²Cr, ⁵³Cr, ⁵⁴Cr" },
    { number: 25, symbol: "Mn", name: "Manganese", mass: "54.938", period: 4, group: 7, category: "transition", config: "[Ar] 3d⁵ 4s²", nobleConfig: "[Ar] 3d⁵ 4s²", electronegativity: "1.55", oxidation: "+7, +6, +4, +3, +2", valence: "2, 4, 6, 7", isotopes: "⁵⁵Mn" },
    { number: 26, symbol: "Fe", name: "Iron", mass: "55.845", period: 4, group: 8, category: "transition", config: "[Ar] 3d⁶ 4s²", nobleConfig: "[Ar] 3d⁶ 4s²", electronegativity: "1.83", oxidation: "+3, +2", valence: "2, 3", isotopes: "⁵⁴Fe, ⁵⁵Fe, ⁵⁶Fe, ⁵⁷Fe, ⁵⁸Fe" },
    { number: 27, symbol: "Co", name: "Cobalt", mass: "58.933", period: 4, group: 9, category: "transition", config: "[Ar] 3d⁷ 4s²", nobleConfig: "[Ar] 3d⁷ 4s²", electronegativity: "1.88", oxidation: "+3, +2", valence: "2, 3", isotopes: "⁵⁹Co" },
    { number: 28, symbol: "Ni", name: "Nickel", mass: "58.693", period: 4, group: 10, category: "transition", config: "[Ar] 3d⁸ 4s²", nobleConfig: "[Ar] 3d⁸ 4s²", electronegativity: "1.91", oxidation: "+3, +2", valence: "2", isotopes: "⁵⁸Ni, ⁶⁰Ni, ⁶¹Ni, ⁶²Ni, ⁶⁴Ni" },
    { number: 29, symbol: "Cu", name: "Copper", mass: "63.546", period: 4, group: 11, category: "transition", config: "[Ar] 3d¹⁰ 4s¹", nobleConfig: "[Ar] 3d¹⁰ 4s¹", electronegativity: "1.90", oxidation: "+2, +1", valence: "2, 1", isotopes: "⁶³Cu, ⁶⁵Cu" },
    { number: 30, symbol: "Zn", name: "Zinc", mass: "65.38", period: 4, group: 12, category: "transition", config: "[Ar] 3d¹⁰ 4s²", nobleConfig: "[Ar] 3d¹⁰ 4s²", electronegativity: "1.65", oxidation: "+2", valence: "2", isotopes: "⁶⁴Zn, ⁶⁶Zn, ⁶⁷Zn, ⁶⁸Zn, ⁷⁰Zn" },
    { number: 31, symbol: "Ga", name: "Gallium", mass: "69.723", period: 4, group: 13, category: "post-transition", config: "[Ar] 3d¹⁰ 4s² 4p¹", nobleConfig: "[Ar] 3d¹⁰ 4s² 4p¹", electronegativity: "1.81", oxidation: "+3", valence: "3", isotopes: "⁶⁹Ga, ⁷¹Ga" },
    { number: 32, symbol: "Ge", name: "Germanium", mass: "72.630", period: 4, group: 14, category: "metalloid", config: "[Ar] 3d¹⁰ 4s² 4p²", nobleConfig: "[Ar] 3d¹⁰ 4s² 4p²", electronegativity: "2.01", oxidation: "+4, +2", valence: "4", isotopes: "⁷⁰Ge, ⁷²Ge, ⁷³Ge, ⁷⁴Ge, ⁷⁶Ge" },
    { number: 33, symbol: "As", name: "Arsenic", mass: "74.922", period: 4, group: 15, category: "metalloid", config: "[Ar] 3d¹⁰ 4s² 4p³", nobleConfig: "[Ar] 3d¹⁰ 4s² 4p³", electronegativity: "2.18", oxidation: "+5, +3, -3", valence: "3, 5", isotopes: "⁷⁵As" },
    { number: 34, symbol: "Se", name: "Selenium", mass: "78.971", period: 4, group: 16, category: "reactive-nonmetal", config: "[Ar] 3d¹⁰ 4s² 4p⁴", nobleConfig: "[Ar] 3d¹⁰ 4s² 4p⁴", electronegativity: "2.55", oxidation: "+6, +4, -2", valence: "2, 4, 6", isotopes: "⁷⁴Se, ⁷⁶Se, ⁷⁷Se, ⁷⁸Se, ⁸⁰Se, ⁸²Se" },
    { number: 35, symbol: "Br", name: "Bromine", mass: "79.904", period: 4, group: 17, category: "halogen", config: "[Ar] 3d¹⁰ 4s² 4p⁵", nobleConfig: "[Ar] 3d¹⁰ 4s² 4p⁵", electronegativity: "2.96", oxidation: "+5, +1, -1", valence: "1, 5", isotopes: "⁷⁹Br, ⁸¹Br" },
    { number: 36, symbol: "Kr", name: "Krypton", mass: "83.798", period: 4, group: 18, category: "noble-gas", config: "[Ar] 3d¹⁰ 4s² 4p⁶", nobleConfig: "[Kr]", electronegativity: "3.00", oxidation: "+2", valence: "0", isotopes: "⁸²Kr, ⁸³Kr, ⁸⁴Kr, ⁸⁶Kr" },
    { number: 37, symbol: "Rb", name: "Rubidium", mass: "85.468", period: 5, group: 1, category: "alkali", config: "[Kr] 5s¹", nobleConfig: "[Kr] 5s¹", electronegativity: "0.82", oxidation: "+1", valence: "1", isotopes: "⁸⁵Rb, ⁸⁷Rb" },
    { number: 38, symbol: "Sr", name: "Strontium", mass: "87.62", period: 5, group: 2, category: "alkaline-earth", config: "[Kr] 5s²", nobleConfig: "[Kr] 5s²", electronegativity: "0.95", oxidation: "+2", valence: "2", isotopes: "⁸⁴Sr, ⁸⁶Sr, ⁸⁷Sr, ⁸⁸Sr" },
    { number: 39, symbol: "Y", name: "Yttrium", mass: "88.906", period: 5, group: 3, category: "transition", config: "[Kr] 4d¹ 5s²", nobleConfig: "[Kr] 4d¹ 5s²", electronegativity: "1.22", oxidation: "+3", valence: "3", isotopes: "⁸⁹Y" },
    { number: 40, symbol: "Zr", name: "Zirconium", mass: "91.224", period: 5, group: 4, category: "transition", config: "[Kr] 4d² 5s²", nobleConfig: "[Kr] 4d² 5s²", electronegativity: "1.33", oxidation: "+4", valence: "4", isotopes: "⁹⁰Zr, ⁹¹Zr, ⁹²Zr, ⁹⁴Zr, ⁹⁶Zr" },
    { number: 41, symbol: "Nb", name: "Niobium", mass: "92.906", period: 5, group: 5, category: "transition", config: "[Kr] 4d⁴ 5s¹", nobleConfig: "[Kr] 4d⁴ 5s¹", electronegativity: "1.6", oxidation: "+5, +3", valence: "5", isotopes: "⁹³Nb" },
    { number: 42, symbol: "Mo", name: "Molybdenum", mass: "95.95", period: 5, group: 6, category: "transition", config: "[Kr] 4d⁵ 5s¹", nobleConfig: "[Kr] 4d⁵ 5s¹", electronegativity: "2.16", oxidation: "+6, +4, +3", valence: "6", isotopes: "⁹²Mo, ⁹⁴Mo, ⁹⁵Mo, ⁹⁶Mo, ⁹⁷Mo, ⁹⁸Mo, ¹⁰⁰Mo" },
    { number: 43, symbol: "Tc", name: "Technetium", mass: "[98]", period: 5, group: 7, category: "transition", config: "[Kr] 4d⁵ 5s²", nobleConfig: "[Kr] 4d⁵ 5s²", electronegativity: "1.9", oxidation: "+7, +4", valence: "7", isotopes: "⁹⁹Tc (Phóng xạ)" },
    { number: 44, symbol: "Ru", name: "Ruthenium", mass: "101.07", period: 5, group: 8, category: "transition", config: "[Kr] 4d⁷ 5s¹", nobleConfig: "[Kr] 4d⁷ 5s¹", electronegativity: "2.2", oxidation: "+8, +6, +4, +3", valence: "3, 4", isotopes: "⁹⁶Ru, ⁹⁸Ru, ⁹⁹Ru, ¹⁰⁰Ru, ¹⁰¹Ru, ¹⁰²Ru, ¹⁰⁴Ru" },
    { number: 45, symbol: "Rh", name: "Rhodium", mass: "102.91", period: 5, group: 9, category: "transition", config: "[Kr] 4d⁸ 5s¹", nobleConfig: "[Kr] 4d⁸ 5s¹", electronegativity: "2.28", oxidation: "+3, +4", valence: "3", isotopes: "¹⁰³Rh" },
    { number: 46, symbol: "Pd", name: "Palladium", mass: "106.42", period: 5, group: 10, category: "transition", config: "[Kr] 4d¹⁰", nobleConfig: "[Kr] 4d¹⁰", electronegativity: "2.20", oxidation: "+4, +2", valence: "2, 4", isotopes: "¹⁰²Pd, ¹⁰⁴Pd, ¹⁰⁵Pd, ¹⁰⁶Pd, ¹⁰⁸Pd, ¹¹⁰Pd" },
    { number: 47, symbol: "Ag", name: "Silver", mass: "107.87", period: 5, group: 11, category: "transition", config: "[Kr] 4d¹⁰ 5s¹", nobleConfig: "[Kr] 4d¹⁰ 5s¹", electronegativity: "1.93", oxidation: "+1", valence: "1", isotopes: "¹⁰⁷Ag, ¹⁰⁹Ag" },
    { number: 48, symbol: "Cd", name: "Cadmium", mass: "112.41", period: 5, group: 12, category: "transition", config: "[Kr] 4d¹⁰ 5s²", nobleConfig: "[Kr] 4d¹⁰ 5s²", electronegativity: "1.69", oxidation: "+2", valence: "2", isotopes: "¹⁰⁶Cd, ¹⁰⁸Cd, ¹¹⁰Cd, ¹¹¹Cd, ¹¹²Cd, ¹¹³Cd, ¹¹⁴Cd, ¹¹⁶Cd" },
    { number: 49, symbol: "In", name: "Indium", mass: "114.82", period: 5, group: 13, category: "post-transition", config: "[Kr] 4d¹⁰ 5s² 5p¹", nobleConfig: "[Kr] 4d¹⁰ 5s² 5p¹", electronegativity: "1.78", oxidation: "+3", valence: "3", isotopes: "¹¹³In, ¹¹⁵In" },
    { number: 50, symbol: "Sn", name: "Tin", mass: "118.71", period: 5, group: 14, category: "post-transition", config: "[Kr] 4d¹⁰ 5s² 5p²", nobleConfig: "[Kr] 4d¹⁰ 5s² 5p²", electronegativity: "1.96", oxidation: "+4, +2", valence: "4, 2", isotopes: "¹¹²Sn - ¹²⁴Sn" },
    { number: 51, symbol: "Sb", name: "Antimony", mass: "121.76", period: 5, group: 15, category: "metalloid", config: "[Kr] 4d¹⁰ 5s² 5p³", nobleConfig: "[Kr] 4d¹⁰ 5s² 5p³", electronegativity: "2.05", oxidation: "+5, +3, -3", valence: "3, 5", isotopes: "¹²¹Sb, ¹²³Sb" },
    { number: 52, symbol: "Te", name: "Tellurium", mass: "127.60", period: 5, group: 16, category: "metalloid", config: "[Kr] 4d¹⁰ 5s² 5p⁴", nobleConfig: "[Kr] 4d¹⁰ 5s² 5p⁴", electronegativity: "2.1", oxidation: "+6, +4, -2", valence: "2, 4, 6", isotopes: "¹²⁰Te - ¹²⁸Te" },
    { number: 53, symbol: "I", name: "Iodine", mass: "126.90", period: 5, group: 17, category: "halogen", config: "[Kr] 4d¹⁰ 5s² 5p⁵", nobleConfig: "[Kr] 4d¹⁰ 5s² 5p⁵", electronegativity: "2.66", oxidation: "+7, +5, +1, -1", valence: "1, 5, 7", isotopes: "¹²⁷I" },
    { number: 54, symbol: "Xe", name: "Xenon", mass: "131.29", period: 5, group: 18, category: "noble-gas", config: "[Kr] 4d¹⁰ 5s² 5p⁶", nobleConfig: "[Xe]", electronegativity: "2.6", oxidation: "+8, +6, +4, +2", valence: "0", isotopes: "¹²⁴Xe - ¹³⁶Xe" },
    { number: 55, symbol: "Cs", name: "Cesium", mass: "132.91", period: 6, group: 1, category: "alkali", config: "[Xe] 6s¹", nobleConfig: "[Xe] 6s¹", electronegativity: "0.79", oxidation: "+1", valence: "1", isotopes: "¹³³Cs" },
    { number: 56, symbol: "Ba", name: "Barium", mass: "137.33", period: 6, group: 2, category: "alkaline-earth", config: "[Xe] 6s²", nobleConfig: "[Xe] 6s²", electronegativity: "0.89", oxidation: "+2", valence: "2", isotopes: "¹³⁰Ba - ¹³⁸Ba" },
    { number: 57, symbol: "La", name: "Lanthanum", mass: "138.91", period: 6, group: 3, category: "lanthanide", config: "[Xe] 5d¹ 6s²", nobleConfig: "[Xe] 5d¹ 6s²", electronegativity: "1.10", oxidation: "+3", valence: "3", isotopes: "¹³⁸La, ¹³⁹La" },
    { number: 58, symbol: "Ce", name: "Cerium", mass: "140.12", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f¹ 5d¹ 6s²", nobleConfig: "[Xe] 4f¹ 5d¹ 6s²", electronegativity: "1.12", oxidation: "+4, +3", valence: "3, 4", isotopes: "¹³⁶Ce - ¹⁴²Ce" },
    { number: 59, symbol: "Pr", name: "Praseodymium", mass: "140.91", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f³ 6s²", nobleConfig: "[Xe] 4f³ 6s²", electronegativity: "1.13", oxidation: "+3, +4", valence: "3", isotopes: "¹⁴¹Pr" },
    { number: 60, symbol: "Nd", name: "Neodymium", mass: "144.24", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f⁴ 6s²", nobleConfig: "[Xe] 4f⁴ 6s²", electronegativity: "1.14", oxidation: "+3", valence: "3", isotopes: "¹⁴²Nd - ¹⁵⁰Nd" },
    { number: 61, symbol: "Pm", name: "Promethium", mass: "[145]", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f⁵ 6s²", nobleConfig: "[Xe] 4f⁵ 6s²", electronegativity: "1.13", oxidation: "+3", valence: "3", isotopes: "¹⁴⁷Pm (Phóng xạ)" },
    { number: 62, symbol: "Sm", name: "Samarium", mass: "150.36", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f⁶ 6s²", nobleConfig: "[Xe] 4f⁶ 6s²", electronegativity: "1.17", oxidation: "+3, +2", valence: "3", isotopes: "¹⁴⁴Sm - ¹⁵⁴Sm" },
    { number: 63, symbol: "Eu", name: "Europium", mass: "151.96", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f⁷ 6s²", nobleConfig: "[Xe] 4f⁷ 6s²", electronegativity: "1.2", oxidation: "+3, +2", valence: "3", isotopes: "¹⁵¹Eu, ¹⁵³Eu" },
    { number: 64, symbol: "Gd", name: "Gadolinium", mass: "157.25", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f⁷ 5d¹ 6s²", nobleConfig: "[Xe] 4f⁷ 5d¹ 6s²", electronegativity: "1.2", oxidation: "+3", valence: "3", isotopes: "¹⁵²Gd - ¹⁶⁰Gd" },
    { number: 65, symbol: "Tb", name: "Terbium", mass: "158.93", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f⁹ 6s²", nobleConfig: "[Xe] 4f⁹ 6s²", electronegativity: "1.2", oxidation: "+3, +4", valence: "3", isotopes: "¹⁵⁹Tb" },
    { number: 66, symbol: "Dy", name: "Dysprosium", mass: "162.50", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f¹⁰ 6s²", nobleConfig: "[Xe] 4f¹⁰ 6s²", electronegativity: "1.22", oxidation: "+3", valence: "3", isotopes: "¹⁵⁶Dy - ¹⁶⁴Dy" },
    { number: 67, symbol: "Ho", name: "Holmium", mass: "164.93", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f¹¹ 6s²", nobleConfig: "[Xe] 4f¹¹ 6s²", electronegativity: "1.23", oxidation: "+3", valence: "3", isotopes: "¹⁶⁵Ho" },
    { number: 68, symbol: "Er", name: "Erbium", mass: "167.26", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f¹² 6s²", nobleConfig: "[Xe] 4f¹² 6s²", electronegativity: "1.24", oxidation: "+3", valence: "3", isotopes: "¹⁶²Er - ¹⁷⁰Er" },
    { number: 69, symbol: "Tm", name: "Thulium", mass: "168.93", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f¹³ 6s²", nobleConfig: "[Xe] 4f¹³ 6s²", electronegativity: "1.25", oxidation: "+3, +2", valence: "3", isotopes: "¹⁶⁹Tm" },
    { number: 70, symbol: "Yb", name: "Ytterbium", mass: "173.05", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f¹⁴ 6s²", nobleConfig: "[Xe] 4f¹⁴ 6s²", electronegativity: "1.1", oxidation: "+3, +2", valence: "3", isotopes: "¹⁶⁸Yb - ¹⁷⁶Yb" },
    { number: 71, symbol: "Lu", name: "Lutetium", mass: "174.97", period: 6, group: 3, category: "lanthanide", config: "[Xe] 4f¹⁴ 5d¹ 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d¹ 6s²", electronegativity: "1.27", oxidation: "+3", valence: "3", isotopes: "¹⁷⁵Lu, ¹⁷⁶Lu" },
    { number: 72, symbol: "Hf", name: "Hafnium", mass: "178.49", period: 6, group: 4, category: "transition", config: "[Xe] 4f¹⁴ 5d² 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d² 6s²", electronegativity: "1.3", oxidation: "+4", valence: "4", isotopes: "¹⁷⁴Hf - ¹⁸⁰Hf" },
    { number: 73, symbol: "Ta", name: "Tantalum", mass: "180.95", period: 6, group: 5, category: "transition", config: "[Xe] 4f¹⁴ 5d³ 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d³ 6s²", electronegativity: "1.5", oxidation: "+5", valence: "5", isotopes: "¹⁸⁰Ta, ¹⁸¹Ta" },
    { number: 74, symbol: "W", name: "Tungsten", mass: "183.84", period: 6, group: 6, category: "transition", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²", electronegativity: "2.36", oxidation: "+6", valence: "6", isotopes: "¹⁸⁰W - ¹⁸⁶W" },
    { number: 75, symbol: "Re", name: "Rhenium", mass: "186.21", period: 6, group: 7, category: "transition", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²", electronegativity: "1.9", oxidation: "+7, +6, +4, +2", valence: "7", isotopes: "¹⁸⁵Re, ¹⁸⁷Re" },
    { number: 76, symbol: "Os", name: "Osmium", mass: "190.23", period: 6, group: 8, category: "transition", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²", electronegativity: "2.2", oxidation: "+8, +6, +4, +3", valence: "4, 6, 8", isotopes: "¹⁸⁴Os - ¹⁹²Os" },
    { number: 77, symbol: "Ir", name: "Iridium", mass: "192.22", period: 6, group: 9, category: "transition", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²", electronegativity: "2.20", oxidation: "+6, +4, +3", valence: "3, 4", isotopes: "¹⁹¹Ir, ¹⁹³Ir" },
    { number: 78, symbol: "Pt", name: "Platinum", mass: "195.08", period: 6, group: 10, category: "transition", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", nobleConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹", electronegativity: "2.28", oxidation: "+4, +2", valence: "2, 4", isotopes: "¹⁹⁰Pt - ¹⁹⁸Pt" },
    { number: 79, symbol: "Au", name: "Gold", mass: "196.97", period: 6, group: 11, category: "transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", nobleConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", electronegativity: "2.54", oxidation: "+3, +1", valence: "1, 3", isotopes: "¹⁹⁷Au" },
    { number: 80, symbol: "Hg", name: "Mercury", mass: "200.59", period: 6, group: 12, category: "transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", nobleConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", electronegativity: "2.00", oxidation: "+2, +1", valence: "2", isotopes: "¹⁹⁶Hg - ²⁰⁴Hg" },
    { number: 81, symbol: "Tl", name: "Thallium", mass: "204.38", period: 6, group: 13, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", nobleConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", electronegativity: "1.62", oxidation: "+3, +1", valence: "1, 3", isotopes: "²⁰³Tl, ²⁰⁵Tl" },
    { number: 82, symbol: "Pb", name: "Lead", mass: "207.2", period: 6, group: 14, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", nobleConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", electronegativity: "2.33", oxidation: "+4, +2", valence: "2, 4", isotopes: "²⁰⁴Pb, ²⁰⁶Pb, ²⁰⁷Pb, ²⁰⁸Pb" },
    { number: 83, symbol: "Bi", name: "Bismuth", mass: "208.98", period: 6, group: 15, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", nobleConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", electronegativity: "2.02", oxidation: "+5, +3", valence: "3, 5", isotopes: "²⁰⁹Bi" },
    { number: 84, symbol: "Po", name: "Polonium", mass: "[209]", period: 6, group: 16, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", nobleConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", electronegativity: "2.0", oxidation: "+4, +2", valence: "2, 4", isotopes: "²⁰⁹Po, ²¹⁰Po" },
    { number: 85, symbol: "At", name: "Astatine", mass: "[210]", period: 6, group: 17, category: "halogen", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", nobleConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", electronegativity: "2.2", oxidation: "+1, -1", valence: "1, 3, 5, 7", isotopes: "²¹⁰At" },
    { number: 86, symbol: "Rn", name: "Radon", mass: "[222]", period: 6, group: 18, category: "noble-gas", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", nobleConfig: "[Rn]", electronegativity: "2.2", oxidation: "+2", valence: "0", isotopes: "²²²Rn" },
    { number: 87, symbol: "Fr", name: "Francium", mass: "[223]", period: 7, group: 1, category: "alkali", config: "[Rn] 7s¹", nobleConfig: "[Rn] 7s¹", electronegativity: "0.7", oxidation: "+1", valence: "1", isotopes: "²²³Fr" },
    { number: 88, symbol: "Ra", name: "Radium", mass: "[226]", period: 7, group: 2, category: "alkaline-earth", config: "[Rn] 7s²", nobleConfig: "[Rn] 7s²", electronegativity: "0.9", oxidation: "+2", valence: "2", isotopes: "²²⁶Ra" },
    { number: 89, symbol: "Ac", name: "Actinium", mass: "[227]", period: 7, group: 3, category: "actinide", config: "[Rn] 6d¹ 7s²", nobleConfig: "[Rn] 6d¹ 7s²", electronegativity: "1.1", oxidation: "+3", valence: "3", isotopes: "²²⁷Ac" },
    { number: 90, symbol: "Th", name: "Thorium", mass: "232.04", period: 7, group: 3, category: "actinide", config: "[Rn] 6d² 7s²", nobleConfig: "[Rn] 6d² 7s²", electronegativity: "1.3", oxidation: "+4", valence: "4", isotopes: "²³²Th" },
    { number: 91, symbol: "Pa", name: "Protactinium", mass: "231.04", period: 7, group: 3, category: "actinide", config: "[Rn] 5f² 6d¹ 7s²", nobleConfig: "[Rn] 5f² 6d¹ 7s²", electronegativity: "1.5", oxidation: "+5, +4", valence: "5", isotopes: "²³¹Pa" },
    { number: 92, symbol: "U", name: "Uranium", mass: "238.03", period: 7, group: 3, category: "actinide", config: "[Rn] 5f³ 6d¹ 7s²", nobleConfig: "[Rn] 5f³ 6d¹ 7s²", electronegativity: "1.38", oxidation: "+6, +5, +4, +3", valence: "6, 4", isotopes: "²³⁵U, ²³⁸U" },
    { number: 93, symbol: "Np", name: "Neptunium", mass: "[237]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f⁴ 6d¹ 7s²", nobleConfig: "[Rn] 5f⁴ 6d¹ 7s²", electronegativity: "1.36", oxidation: "+5, +6, +4, +3", valence: "5", isotopes: "²³⁷Np" },
    { number: 94, symbol: "Pu", name: "Plutonium", mass: "[244]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f⁶ 7s²", nobleConfig: "[Rn] 5f⁶ 7s²", electronegativity: "1.28", oxidation: "+6, +5, +4, +3", valence: "4", isotopes: "²⁴⁴Pu" },
    { number: 95, symbol: "Am", name: "Americium", mass: "[243]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f⁷ 7s²", nobleConfig: "[Rn] 5f⁷ 7s²", electronegativity: "1.3", oxidation: "+6, +5, +4, +3", valence: "3", isotopes: "²⁴³Am" },
    { number: 96, symbol: "Cm", name: "Curium", mass: "[247]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f⁷ 6d¹ 7s²", nobleConfig: "[Rn] 5f⁷ 6d¹ 7s²", electronegativity: "1.3", oxidation: "+4, +3", valence: "3", isotopes: "²⁴⁷Cm" },
    { number: 97, symbol: "Bk", name: "Berkelium", mass: "[247]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f⁹ 7s²", nobleConfig: "[Rn] 5f⁹ 7s²", electronegativity: "1.3", oxidation: "+4, +3", valence: "3", isotopes: "²⁴⁷Bk" },
    { number: 98, symbol: "Cf", name: "Californium", mass: "[251]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f¹⁰ 7s²", nobleConfig: "[Rn] 5f¹⁰ 7s²", electronegativity: "1.3", oxidation: "+4, +3", valence: "3", isotopes: "²⁵¹Cf" },
    { number: 99, symbol: "Es", name: "Einsteinium", mass: "[252]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f¹¹ 7s²", nobleConfig: "[Rn] 5f¹¹ 7s²", electronegativity: "1.3", oxidation: "+3", valence: "3", isotopes: "²⁵²Es" },
    { number: 100, symbol: "Fm", name: "Fermium", mass: "[257]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f¹² 7s²", nobleConfig: "[Rn] 5f¹² 7s²", electronegativity: "1.3", oxidation: "+3", valence: "3", isotopes: "²⁵⁷Fm" },
    { number: 101, symbol: "Md", name: "Mendelevium", mass: "[258]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f¹³ 7s²", nobleConfig: "[Rn] 5f¹³ 7s²", electronegativity: "1.3", oxidation: "+3, +2", valence: "3", isotopes: "²⁵⁸Md" },
    { number: 102, symbol: "No", name: "Nobelium", mass: "[259]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f¹⁴ 7s²", nobleConfig: "[Rn] 5f¹⁴ 7s²", electronegativity: "1.3", oxidation: "+3, +2", valence: "2, 3", isotopes: "²⁵⁹No" },
    { number: 103, symbol: "Lr", name: "Lawrencium", mass: "[266]", period: 7, group: 3, category: "actinide", config: "[Rn] 5f¹⁴ 7s² 7p¹", nobleConfig: "[Rn] 5f¹⁴ 7s² 7p¹", electronegativity: "1.3", oxidation: "+3", valence: "3", isotopes: "²⁶⁶Lr" },
    { number: 104, symbol: "Rf", name: "Rutherfordium", mass: "[267]", period: 7, group: 4, category: "transition", config: "[Rn] 5f¹⁴ 6d² 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d² 7s²", electronegativity: "-", oxidation: "+4", valence: "4", isotopes: "²⁶⁷Rf" },
    { number: 105, symbol: "Db", name: "Dubnium", mass: "[268]", period: 7, group: 5, category: "transition", config: "[Rn] 5f¹⁴ 6d³ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d³ 7s²", electronegativity: "-", oxidation: "+5", valence: "5", isotopes: "²⁶⁸Db" },
    { number: 106, symbol: "Sg", name: "Seaborgium", mass: "[269]", period: 7, group: 6, category: "transition", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d⁴ 7s²", electronegativity: "-", oxidation: "+6", valence: "6", isotopes: "²⁶⁹Sg" },
    { number: 107, symbol: "Bh", name: "Bohrium", mass: "[270]", period: 7, group: 7, category: "transition", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d⁵ 7s²", electronegativity: "-", oxidation: "+7", valence: "7", isotopes: "²⁷⁰Bh" },
    { number: 108, symbol: "Hs", name: "Hassium", mass: "[277]", period: 7, group: 8, category: "transition", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d⁶ 7s²", electronegativity: "-", oxidation: "+8", valence: "8", isotopes: "²⁷⁷Hs" },
    { number: 109, symbol: "Mt", name: "Meitnerium", mass: "[278]", period: 7, group: 9, category: "transition", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d⁷ 7s²", electronegativity: "-", oxidation: "+3", valence: "3", isotopes: "²⁷⁸Mt" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", mass: "[281]", period: 7, group: 10, category: "transition", config: "[Rn] 5f¹⁴ 6d⁸ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d⁸ 7s²", electronegativity: "-", oxidation: "+2", valence: "2", isotopes: "²⁸¹Ds" },
    { number: 111, symbol: "Rg", name: "Roentgenium", mass: "[282]", period: 7, group: 11, category: "transition", config: "[Rn] 5f¹⁴ 6d⁹ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d⁹ 7s²", electronegativity: "-", oxidation: "+3", valence: "3", isotopes: "²⁸²Rg" },
    { number: 112, symbol: "Cn", name: "Copernicium", mass: "[285]", period: 7, group: 12, category: "transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", nobleConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", electronegativity: "-", oxidation: "+2, +4", valence: "2", isotopes: "²⁸⁵Cn" },
    { number: 113, symbol: "Nh", name: "Nihonium", mass: "[286]", period: 7, group: 13, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", nobleConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", electronegativity: "-", oxidation: "+1, +3", valence: "3", isotopes: "²⁸⁶Nh" },
    { number: 114, symbol: "Fl", name: "Flerovium", mass: "[289]", period: 7, group: 14, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", nobleConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", electronegativity: "-", oxidation: "+2, +4", valence: "4", isotopes: "²⁸⁹Fl" },
    { number: 115, symbol: "Mc", name: "Moscovium", mass: "[290]", period: 7, group: 15, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", nobleConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", electronegativity: "-", oxidation: "+1, +3", valence: "3, 5", isotopes: "²⁹⁰Mc" },
    { number: 116, symbol: "Lv", name: "Livermorium", mass: "[293]", period: 7, group: 16, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", nobleConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", electronegativity: "-", oxidation: "+2, +4", valence: "2, 4", isotopes: "²⁹³Lv" },
    { number: 117, symbol: "Ts", name: "Tennessine", mass: "[294]", period: 7, group: 17, category: "halogen", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", nobleConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", electronegativity: "-", oxidation: "+1, -1", valence: "1, 5", isotopes: "²⁹⁴Ts" },
    { number: 118, symbol: "Og", name: "Oganesson", mass: "[294]", period: 7, group: 18, category: "noble-gas", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", nobleConfig: "[Og]", electronegativity: "-", oxidation: "0, +2, +4", valence: "0", isotopes: "²⁹⁴Og" }
];

function getGridPosition(el) {
    let row = el.period;
    let col = el.group;
    if (el.number >= 57 && el.number <= 71) {
        row = 8;
        col = (el.number - 57) + 3;
    } else if (el.number >= 89 && el.number <= 103) {
        row = 9;
        col = (el.number - 89) + 3;
    }
    return { row, col };
}

const periodicTable = document.getElementById("periodicTable");

function renderTable() {
    periodicTable.innerHTML = "";
    elementsData.forEach(el => {
        const cell = document.createElement("div");
        const pos = getGridPosition(el);
        
        cell.className = `element-cell group-${el.category}`;
        cell.style.gridRow = pos.row;
        cell.style.gridColumn = pos.col;
        cell.setAttribute("data-number", el.number);
        cell.setAttribute("data-symbol", el.symbol.toLowerCase());
        cell.setAttribute("data-name", el.name.toLowerCase());
        cell.setAttribute("data-category", el.category);

        cell.innerHTML = `
            <span class="el-number">${el.number}</span>
            <span class="el-symbol">${el.symbol}</span>
            <span class="el-name">${el.name}</span>
            <span class="el-mass">${el.mass}</span>
        `;

        cell.addEventListener("click", () => openModal(el));
        periodicTable.appendChild(cell);
    });

    const spacer = document.createElement("div");
    spacer.style.gridRow = 7;
    spacer.style.gridColumn = "1 / span 18";
    spacer.style.height = "15px";
    periodicTable.appendChild(spacer);
}

renderTable();

// --- LOGIC MODAL & THREE.JS 3D MÔ HÌNH BOHR ---
const modal = document.getElementById("elementModal");
const closeModalBtn = document.getElementById("closeModal");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const modal3dPane = document.getElementById("modal3dPane");

let scene, camera, renderer, controls, animationFrameId;

function openModal(el) {
    document.getElementById("modalNumber").innerText = `Số hiệu nguyên tử: ${el.number}`;
    document.getElementById("modalName").innerText = el.name;
    document.getElementById("modalSymbol").innerText = el.symbol;
    document.getElementById("modalMass").innerText = el.mass;
    document.getElementById("modalConfig").innerText = el.config;
    document.getElementById("modalNobleConfig").innerText = el.nobleConfig;
    document.getElementById("modalElectronegativity").innerText = el.electronegativity;
    document.getElementById("modalOxidation").innerText = el.oxidation;
    document.getElementById("modalValence").innerText = el.valence;
    document.getElementById("modalIsotopes").innerText = el.isotopes;

    modal.classList.add("active");
    setTimeout(() => init3DAtom(el.number), 100);
}

function closeModal() {
    modal.classList.remove("active");
    modal3dPane.classList.remove("fullscreen");
    fullscreenBtn.innerText = "⛶";
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    const container = document.getElementById("canvasContainer");
    container.innerHTML = "";
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Xử lý phóng to toàn màn hình độc lập cho khung 3D
fullscreenBtn.addEventListener("click", () => {
    modal3dPane.classList.toggle("fullscreen");
    const isFull = modal3dPane.classList.contains("fullscreen");
    fullscreenBtn.innerText = isFull ? "🗗" : "⛶";
    setTimeout(() => onWindowResize(), 50);
});

function getElectronShells(atomicNumber) {
    const maxCapacity = [2, 8, 18, 32, 32, 18, 8];
    let shells = [];
    let remaining = atomicNumber;
    for (let i = 0; i < maxCapacity.length; i++) {
        if (remaining <= 0) break;
        let count = Math.min(remaining, maxCapacity[i]);
        shells.push(count);
        remaining -= count;
    }
    return shells;
}

function init3DAtom(atomicNumber) {
    const container = document.getElementById("canvasContainer");
    container.innerHTML = "";

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 18);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Ánh sáng tăng cường sinh động
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x38bdf8, 2.0, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Hạt nhân (Nucleus) ở giữa có hiệu ứng phát sáng
    const nucleusGroup = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const nucleusMat = new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0x991b1b, shininess: 120 });
    const nucleusMesh = new THREE.Mesh(sphereGeo, nucleusMat);
    nucleusGroup.add(nucleusMesh);
    scene.add(nucleusGroup);

    // Các lớp Electron (Bohr Orbits)
    const shells = getElectronShells(atomicNumber);
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    let orbitRings = [];

    shells.forEach((electronCount, index) => {
        let radius = 2.2 + index * 1.4;

        // Tạo quỹ đạo hình vòng tròn
        const ringGeo = new THREE.RingGeometry(radius - 0.015, radius + 0.015, 96);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        
        // Phân bổ góc nghiêng không gian 3D cho các quỹ đạo sinh động hơn
        ring.rotation.x = Math.PI / 2 + (index * 0.4);
        ring.rotation.y = index * 0.5;
        orbitGroup.add(ring);

        // Nhóm chứa các hạt electron chuyển động trên quỹ đạo nghiêng tương ứng
        const orbitSubGroup = new THREE.Group();
        orbitSubGroup.rotation.x = ring.rotation.x;
        orbitSubGroup.rotation.y = ring.rotation.y;

        for (let i = 0; i < electronCount; i++) {
            let angle = (i / electronCount) * Math.PI * 2;
            let elGeo = new THREE.SphereGeometry(0.14, 16, 16);
            let elMat = new THREE.MeshPhongMaterial({ color: 0x38bdf8, emissive: 0x0284c7, shininess: 100 });
            let electron = new THREE.Mesh(elGeo, elMat);

            electron.position.x = Math.cos(angle) * radius;
            electron.position.y = Math.sin(angle) * radius;
            orbitSubGroup.add(electron);
        }
        
        orbitGroup.add(orbitSubGroup);
        orbitRings.push({ group: orbitSubGroup, speed: (0.008 + index * 0.003) * (index % 2 === 0 ? 1 : -1) });
    });

    // Animation vòng quay electron
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        orbitRings.forEach(item => {
            item.group.rotation.z += item.speed;
        });
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    const container = document.getElementById("canvasContainer");
    if (!container || !renderer || !camera) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// --- TÍNH NĂNG TÌM KIẾM & LỌC NHÓM ---
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    const cells = document.querySelectorAll(".element-cell");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    document.querySelector('[data-category="all"]').classList.add("active");

    cells.forEach(cell => {
        const num = cell.getAttribute("data-number");
        const sym = cell.getAttribute("data-symbol");
        const name = cell.getAttribute("data-name");

        if (!keyword || num.includes(keyword) || sym.includes(keyword) || name.includes(keyword)) {
            cell.classList.remove("dimmed");
            cell.classList.remove("highlighted");
            if (keyword && (num === keyword || sym === keyword || name === keyword)) {
                cell.classList.add("highlighted");
            }
        } else {
            cell.classList.add("dimmed");
        }
    });
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        searchInput.value = "";

        const category = btn.getAttribute("data-category");
        const cells = document.querySelectorAll(".element-cell");

        cells.forEach(cell => {
            const cellCategory = cell.getAttribute("data-category");
            if (category === "all" || cellCategory === category) {
                cell.classList.remove("dimmed");
                cell.classList.remove("highlighted");
            } else {
                cell.classList.add("dimmed");
            }
        });
    });
});