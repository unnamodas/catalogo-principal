const produtos = [
    {
        "id": 1,
        "nome": "Blusa detalhe",
        "por": "179,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/blusa_13066vi.jpg", "vendido": false, "codigoBling": "465688" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/blusa_13066pre.jpg", "vendido": false, "codigoBling": "465687" }
        ]
    },
    {
        "id": 2,
        "nome": "Camisa lisa",
        "por": "229,90",
        "destaque": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "48", "imagem": "fotos/camisa_13054f2.jpg", "vendido": false, "codigoBling": "465719" },
            { "cor": "Branco", "tamanho": "52", "imagem": "fotos/camisa_13054f2.jpg", "vendido": false, "codigoBling": "465720" },
            { "cor": "Branco", "tamanho": "48", "imagem": "fotos/camisa_13054.jpg", "vendido": false, "codigoBling": "465719" },
            { "cor": "Branco", "tamanho": "52", "imagem": "fotos/camisa_13054.jpg", "vendido": false, "codigoBling": "465720" }
        ]
    },
    {
        "id": 3,
        "nome": "Blusa linho",
        "por": "179,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul marinho", "tamanho": "44", "imagem": "fotos/blusa_13068am.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "cor": "Verde oliva", "tamanho": "54", "imagem": "fotos/blusa_13068vo.jpg", "vendido": false, "codigoBling": "465717" }
        ]
    },
    {
        "id": 4,
        "nome": "Vestido longo",
        "por": "279,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "46", "imagem": "fotos/vestido_13021vi.jpg", "vendido": false, "codigoBling": "465701" },
            { "cor": "Bordô", "tamanho": "50", "imagem": "fotos/vestido_13021vi.jpg", "vendido": false, "codigoBling": "465703" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_13021pre.jpg", "vendido": false, "codigoBling": "465701" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_13021pre.jpg", "vendido": false, "codigoBling": "465702" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_13021pre.jpg", "vendido": false, "codigoBling": "465703" }
        ]
    },
    {
        "id": 5,
        "nome": "Blusa fivela",
        "por": "179,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/blusa_13073.jpg", "vendido": false, "codigoBling": "465722" }
        ]
    },
    {
        "id": 6,
        "nome": "Blusa lisa manga 7/8",
        "por": "179,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul marinho", "tamanho": "46", "imagem": "fotos/blusa_13077am.jpg", "vendido": false, "codigoBling": "465706" },
            { "cor": "Azul marinho", "tamanho": "54", "imagem": "fotos/blusa_13077am.jpg", "vendido": false, "codigoBling": "465710" },
            { "cor": "Bordô", "tamanho": "44", "imagem": "fotos/blusa_13077vi.jpg", "vendido": false, "codigoBling": "465705" },
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/blusa_13077vi.jpg", "vendido": false, "codigoBling": "465707" },
            { "cor": "Bordô", "tamanho": "52", "imagem": "fotos/blusa_13077vi.jpg", "vendido": false, "codigoBling": "465709" },
        ]
    },
    {
        "id": 7,
        "nome": "Colete",
        "por": "189,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/colete_12994.jpg", "vendido": false, "codigoBling": "465697" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/colete_12994f2.jpg", "vendido": false, "codigoBling": "465698" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/colete_12994.jpg", "vendido": false, "codigoBling": "465699" },
        ]
    },
    {
        "id": 8,
        "nome": "Calça pantalona",
        "por": "279,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/calca_13018.jpg", "vendido": false, "codigoBling": "465692" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/calca_13018.jpg", "vendido": false, "codigoBling": "465693" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/calca_13018.jpg", "vendido": false, "codigoBling": "465694" },
            { "cor": "Preto", "tamanho": "52", "imagem": "fotos/calca_13018.jpg", "vendido": false, "codigoBling": "465695" },
        ]
    },
    {
        "id": 9,
        "nome": "Conjunto prespontado",
        "por": "279,90",
        "destaque": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "50", "imagem": "fotos/conjunto_13011ma.jpg", "vendido": false, "codigoBling": "465683" },
            { "cor": "Marrom", "tamanho": "52", "imagem": "fotos/conjunto_13011ma2.jpg", "vendido": false, "codigoBling": "465684" },
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/conjunto_13011be.jpg", "vendido": true, "codigoBling": "465682" },
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/conjunto_13011be2.jpg", "vendido": true, "codigoBling": "465682" }
        ]
    },
    {
        "id": 10,
        "nome": "Vestido moletinho",
        "por": "229,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "P", "imagem": "fotos/vestido_140wany.jpg", "vendido": false, "codigoBling": "465723" },
            { "cor": "Preto", "tamanho": "M", "imagem": "fotos/vestido_140wany.jpg", "vendido": false, "codigoBling": "463845" },
            { "cor": "Preto", "tamanho": "GG", "imagem": "fotos/vestido_140wany.jpg", "vendido": false, "codigoBling": "463847" }
        ]
    },
    {
        "id": 11,
        "nome": "Vestido midi",
        "por": "289,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/vestido_151941dc.jpg", "vendido": false, "codigoBling": "465729" },
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/vestido_151941dc.jpg", "vendido": false, "codigoBling": "465730" },
            { "cor": "Bege", "tamanho": "52", "imagem": "fotos/vestido_151941dc.jpg", "vendido": false, "codigoBling": "465731" },
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/vestido_151941dcf2.jpg", "vendido": false, "codigoBling": "465729" },
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/vestido_151941dcf2.jpg", "vendido": false, "codigoBling": "465730" },
            { "cor": "Bege", "tamanho": "52", "imagem": "fotos/vestido_151941dcf2.jpg", "vendido": false, "codigoBling": "465731" },
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/vestido_151941dcf3.jpg", "vendido": false, "codigoBling": "465729" },
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/vestido_151941dcf3.jpg", "vendido": false, "codigoBling": "465730" },
            { "cor": "Bege", "tamanho": "52", "imagem": "fotos/vestido_151941dcf3.jpg", "vendido": false, "codigoBling": "465731" }
        ]
    },
    {
        "id": 12,
        "nome": "Vestido midi",
        "por": "289,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_151966dc.jpg", "vendido": false, "codigoBling": "465733" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151966dc.jpg", "vendido": false, "codigoBling": "465734" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151966dc.jpg", "vendido": false, "codigoBling": "465735" },
            { "cor": "Preto", "tamanho": "52", "imagem": "fotos/vestido_151966dc.jpg", "vendido": false, "codigoBling": "465736" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_151966dcf2.jpg", "vendido": false, "codigoBling": "465733" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151966dcf2.jpg", "vendido": false, "codigoBling": "465734" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151966dcf2.jpg", "vendido": false, "codigoBling": "465735" },
            { "cor": "Preto", "tamanho": "52", "imagem": "fotos/vestido_151966dcf2.jpg", "vendido": false, "codigoBling": "465736" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_151966dcf3.jpg", "vendido": false, "codigoBling": "465733" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151966dcf3.jpg", "vendido": false, "codigoBling": "465734" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151966dcf3.jpg", "vendido": false, "codigoBling": "465735" },
            { "cor": "Preto", "tamanho": "52", "imagem": "fotos/vestido_151966dcf3.jpg", "vendido": false, "codigoBling": "465736" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_151973dc.jpg", "vendido": false, "codigoBling": "465733" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151973dc.jpg", "vendido": false, "codigoBling": "465734" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151973dc.jpg", "vendido": false, "codigoBling": "465735" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_151973dcf2.jpg", "vendido": false, "codigoBling": "465733" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151973dcf2.jpg", "vendido": false, "codigoBling": "465734" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151973dcf2.jpg", "vendido": false, "codigoBling": "465735" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_151973dcf3.jpg", "vendido": false, "codigoBling": "465733" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151973dcf3.jpg", "vendido": false, "codigoBling": "465734" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151973dcf3.jpg", "vendido": false, "codigoBling": "465735" }
        ]
    },
    {
        "id": 13,
        "nome": "Vestido midi",
        "por": "259,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "44", "imagem": "fotos/vestido_151067dc.jpg", "vendido": false, "codigoBling": "465725" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151067dc.jpg", "vendido": false, "codigoBling": "465726" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151067dc.jpg", "vendido": false, "codigoBling": "465727" },
            { "cor": "Preto", "tamanho": "44", "imagem": "fotos/vestido_151067dcf2.jpg", "vendido": false, "codigoBling": "465725" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151067dcf2.jpg", "vendido": false, "codigoBling": "465726" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151067dcf2.jpg", "vendido": false, "codigoBling": "465727" },
            { "cor": "Preto", "tamanho": "44", "imagem": "fotos/vestido_151067dcf3.jpg", "vendido": false, "codigoBling": "465725" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_151067dcf3.jpg", "vendido": false, "codigoBling": "465726" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_151067dcf3.jpg", "vendido": false, "codigoBling": "465727" }
        ]
    },
    {
        "id": 14,
        "nome": "Blusa detalhe",
        "por": "169,90",
        "destaque": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "48", "imagem": "fotos/blusa_13064.jpg", "vendido": true, "codigoBling": "465712" },
            { "cor": "Marrom", "tamanho": "50", "imagem": "fotos/blusa_13064.jpg", "vendido": false, "codigoBling": "465713" },
        ]
    },
    {
        "id": 16,
        "nome": "Vestido longo",
        "por": "529,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul marinho", "tamanho": "50", "imagem": "fotos/vestido_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 17,
        "nome": "Vestido longo",
        "por": "589,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/vestido_2.jpg", "vendido": false, "codigoBling": "FALTA" },
        ]
    },
    {
        "id": 18,
        "nome": "Vestido longo",
        "por": "419,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "G2", "imagem": "fotos/vestido_3.jpg", "vendido": false, "codigoBling": "FALTA" },
        ]
    },
    {
        "id": 19,
        "nome": "Vestido longo",
        "por": "429,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "50", "imagem": "fotos/vestido_4.jpg", "vendido": false, "codigoBling": "FALTA" },
        ]
    },
    {
        "id": 20,
        "nome": "Vestido longo",
        "por": "539,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "52", "imagem": "fotos/vestido_5az.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Fúcsia", "tamanho": "50", "imagem": "fotos/vestido_5fuc.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Rosa", "tamanho": "48", "imagem": "fotos/vestido_5ros.jpg", "vendido": false, "codigoBling": "FALTA" },
        ]
    },
    {
        "id": 21,
        "nome": "Vestido longo",
        "por": "549,90",
        "destaque": false,
        "variantes": [
            { "cor": "Rosa", "tamanho": "50", "imagem": "fotos/vestido_6.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 22,
        "nome": "Vestido longo",
        "por": "489,90",
        "destaque": false,
        "variantes": [
            { "cor": "Rosa", "tamanho": "52", "imagem": "fotos/vestido_7ros.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Verde", "tamanho": "50", "imagem": "fotos/vestido_7ver.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 23,
        "nome": "Vestido longo",
        "por": "489,90",
        "destaque": false,
        "variantes": [
            { "cor": "Terracota", "tamanho": "52", "imagem": "fotos/vestido_8.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 24,
        "nome": "Vestido longo",
        "por": "379,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/vestido_9.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 26,
        "nome": "Vestido longo",
        "por": "499,90",
        "destaque": false,
        "variantes": [
            { "cor": "Verde", "tamanho": "46", "imagem": "fotos/vestido_11.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 27,
        "nome": "Vestido longo",
        "por": "499,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul marinho", "tamanho": "50", "imagem": "fotos/vestido_12az.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/vestido_12bor.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 28,
        "nome": "Vestido longo",
        "por": "489,90",
        "destaque": false,
        "variantes": [
            { "cor": "Rosa", "tamanho": "46", "imagem": "fotos/vestido_13.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 29,
        "nome": "Vestido curto",
        "por": "379,90",
        "destaque": false,
        "variantes": [
            { "cor": "Terracota", "tamanho": "44", "imagem": "fotos/vestido_14ter.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bordô", "tamanho": "46", "imagem": "fotos/vestido_14bor.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bordô", "tamanho": "50", "imagem": "fotos/vestido_14bor.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 30,
        "nome": "Vestido curto",
        "por": "389,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_15pre.jpg", "vendido": false, "codigoBling": "465213" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_15pre.jpg", "vendido": true, "codigoBling": "465212" },
            { "cor": "Branco", "tamanho": "48", "imagem": "fotos/vestido_15br.jpg", "vendido": false, "codigoBling": "463476" },
            { "cor": "Branco", "tamanho": "50", "imagem": "fotos/vestido_15br.jpg", "vendido": true, "codigoBling": "462918" },
            { "cor": "Bordô", "tamanho": "44", "imagem": "fotos/vestido_15bor.jpg", "vendido": false, "codigoBling": "465214" },
            { "cor": "Bordô", "tamanho": "50", "imagem": "fotos/vestido_15bor.jpg", "vendido": false, "codigoBling": "465212" }
        ]
    },
    {
        "id": 31,
        "nome": "Vestido longo",
        "por": "389,90",
        "destaque": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "52", "imagem": "fotos/vestido_16.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 32,
        "nome": "Vestido longo",
        "por": "419,90",
        "destaque": false,
        "variantes": [
            { "cor": "Verde", "tamanho": "G2", "imagem": "fotos/vestido_17.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 33,
        "nome": "Vestido longo",
        "por": "499,90",
        "destaque": false,
        "variantes": [
            { "cor": "Terracota", "tamanho": "46", "imagem": "fotos/vestido_19.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 34,
        "nome": "Vestido longo",
        "por": "559,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/vestido_20.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 35,
        "nome": "Vestido midi",
        "por": "329,90",
        "destaque": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "48", "imagem": "fotos/vestido_21mar.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Terracota", "tamanho": "46", "imagem": "fotos/vestido_21ter.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 36,
        "nome": "Vestido midi",
        "por": "369,90",
        "destaque": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "46", "imagem": "fotos/vestido_22mar.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Marrom", "tamanho": "50", "imagem": "fotos/vestido_22mar.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bordô", "tamanho": "44", "imagem": "fotos/vestido_22bor.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/vestido_22bor.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_22pre.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 37,
        "nome": "Vestido midi",
        "por": "389,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/vestido_23.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/vestido_23.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/vestido_23dt.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/vestido_23dt.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 38,
        "nome": "Vestido midi",
        "por": "339,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "46", "imagem": "fotos/vestido_24az.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bordô", "tamanho": "44", "imagem": "fotos/vestido_24bor.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/vestido_24bor.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Preto", "tamanho": "52", "imagem": "fotos/vestido_24pre.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 39,
        "nome": "Vestido midi",
        "por": "339,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_25.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_25dt.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 40,
        "nome": "Vestido midi",
        "por": "339,90",
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_26.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 41,
        "nome": "Vestido midi",
        "por": "229,90",
        "destaque": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "44", "imagem": "fotos/vestido_27.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 42,
        "nome": "Vestido curto",
        "por": "579,90",
        "destaque": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "46", "imagem": "fotos/vestido_28.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Branco", "tamanho": "50", "imagem": "fotos/vestido_28.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Branco", "tamanho": "54", "imagem": "fotos/vestido_28.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Branco", "tamanho": "46", "imagem": "fotos/vestido_28dt.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Branco", "tamanho": "50", "imagem": "fotos/vestido_28dt.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Branco", "tamanho": "54", "imagem": "fotos/vestido_28dt.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 43,
        "nome": "Vestido longo",
        "por": "389,90",
        "destaque": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "50", "imagem": "fotos/vestido_29bra.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Amarelo", "tamanho": "52", "imagem": "fotos/vestido_29ama.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Vermelho", "tamanho": "54", "imagem": "fotos/vestido_29verm.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 44,
        "nome": "Conjunto",
        "por": "549,80",
        "precos_separados": [
            { "peca": "Blusa", "valor": "219,90" },
            { "peca": "Saia", "valor": "329,90" }
        ],
        "destaque": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "GG", "imagem": "fotos/conjunto_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Preto", "tamanho": "G1", "imagem": "fotos/conjunto_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 45,
        "nome": "Vestido midi",
        "por": "399,90",
        "destaque": false,
        "variantes": [
            { "cor": "Vermelho", "tamanho": "46", "imagem": "fotos/vestido_30.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Vermelho", "tamanho": "48", "imagem": "fotos/vestido_30.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Vermelho", "tamanho": "50", "imagem": "fotos/vestido_30.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 46,
        "nome": "Vestido midi",
        "por": "249,90",
        "destaque": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "46", "imagem": "fotos/vestido_31.jpg", "vendido": false, "codigoBling": "463883" },
            { "cor": "Branco", "tamanho": "48", "imagem": "fotos/vestido_31.jpg", "vendido": false, "codigoBling": "463884" },
            { "cor": "Branco", "tamanho": "50", "imagem": "fotos/vestido_31.jpg", "vendido": false, "codigoBling": "463885" }
        ]
    },
    {
        "id": 47,
        "nome": "Vestido longo",
        "por": "379,90",
        "destaque": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "46", "imagem": "fotos/vestido_33.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 48,
        "nome": "Vestido longo",
        "por": "529,90",
        "destaque": false,
        "variantes": [
            { "cor": "Verde", "tamanho": "46", "imagem": "fotos/vestido_34.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 49,
        "nome": "Vestido longo",
        "por": "539,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Verde Oliva", "tamanho": "46", "imagem": "fotos/vestido_35ver.jpg", "vendido": false, "codigoBling": "465823" },
            { "cor": "Terracota", "tamanho": "GG", "imagem": "fotos/vestido_35ter.jpg", "vendido": false, "codigoBling": "465821" },
            { "cor": "Bordô", "tamanho": "GG", "imagem": "fotos/vestido_35bor.jpg", "vendido": false, "codigoBling": "465822" }
        ]
    },
    {
        "id": 50,
        "nome": "Vestido longo",
        "por": "569,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Terracota", "tamanho": "50", "imagem": "fotos/vestido_36ter.jpg", "vendido": false, "codigoBling": "465838" },
            { "cor": "Terracota", "tamanho": "52", "imagem": "fotos/vestido_36ter.jpg", "vendido": false, "codigoBling": "465840" },
            { "cor": "Bordô", "tamanho": "46", "imagem": "fotos/vestido_36bor.jpg", "vendido": false, "codigoBling": "465836" },
            { "cor": "Bordô", "tamanho": "52", "imagem": "fotos/vestido_36bor.jpg", "vendido": true, "codigoBling": "465839" }
        ]
    },
    {
        "id": 51,
        "nome": "Vestido longo",
        "por": "369,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "50", "imagem": "fotos/vestido_37.jpg", "vendido": true, "codigoBling": "465828" },
            { "cor": "Verde", "tamanho": "GG", "imagem": "fotos/vestido_37ver.jpg", "vendido": false, "codigoBling": "465829" }
        ]
    },
    {
        "id": 52,
        "nome": "Vestido longo",
        "por": "569,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul Petróleo", "tamanho": "48", "imagem": "fotos/vestido_38.jpg", "vendido": false, "codigoBling": "465825" },
            { "cor": "Azul Petróleo", "tamanho": "50", "imagem": "fotos/vestido_38.jpg", "vendido": false, "codigoBling": "465826" }
        ]
    },
    {
        "id": 53,
        "nome": "Vestido longo",
        "por": "499,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul Petróleo", "tamanho": "46", "imagem": "fotos/vestido_39.jpg", "vendido": false, "codigoBling": "465831" },
            { "cor": "Azul Petróleo", "tamanho": "48", "imagem": "fotos/vestido_39.jpg", "vendido": false, "codigoBling": "465832" },
            { "cor": "Azul Petróleo", "tamanho": "50", "imagem": "fotos/vestido_39.jpg", "vendido": false, "codigoBling": "465833" },
            { "cor": "Azul Petróleo", "tamanho": "52", "imagem": "fotos/vestido_39.jpg", "vendido": false, "codigoBling": "465834" }
        ]
    },
    {
        "id": 54,
        "nome": "Vestido midi",
        "por": "299,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "48", "imagem": "fotos/vestido_40az.jpg", "vendido": false, "codigoBling": "464823" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_40pre.jpg", "vendido": false, "codigoBling": "464824" }
        ]
    },
    {
        "id": 55,
        "nome": "Vestido midi",
        "por": "319,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "48", "imagem": "fotos/vestido_41.jpg", "vendido": false, "codigoBling": "465219" },
            { "cor": "Bordô", "tamanho": "52", "imagem": "fotos/vestido_41.jpg", "vendido": false, "codigoBling": "465221" }
        ]
    },
    {
        "id": 56,
        "nome": "Vestido midi",
        "por": "239,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul Petróleo", "tamanho": "46", "imagem": "fotos/vestido_42.jpg", "vendido": false, "codigoBling": "465231" }
        ]
    },
    {
        "id": 57,
        "nome": "Vestido midi",
        "por": "399,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/vestido_43.jpg", "vendido": false, "codigoBling": "465344" }
        ]
    },
    {
        "id": 58,
        "nome": "Vestido curto",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/vestido_44.jpg", "vendido": false, "codigoBling": "464883" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/vestido_44.jpg", "vendido": true, "codigoBling": "464885" }
        ]
    },
    {
        "id": 59,
        "nome": "Vestido midi",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "48", "imagem": "fotos/vestido_45az.jpg", "vendido": false, "codigoBling": "463322" },
            { "cor": "Rosa", "tamanho": "46", "imagem": "fotos/vestido_45ros.jpg", "vendido": false, "codigoBling": "463321" }
        ]
    },
    {
        "id": 60,
        "nome": "Vestido midi",
        "por": "329,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Terracota", "tamanho": "48", "imagem": "fotos/vestido_46.jpg", "vendido": false, "codigoBling": "465242" }
        ]
    },
    {
        "id": 61,
        "nome": "Vestido midi",
        "por": "329,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "48", "imagem": "fotos/vestido_47.jpg", "vendido": false, "codigoBling": "465256" },
            { "cor": "Marrom", "tamanho": "50", "imagem": "fotos/vestido_47.jpg", "vendido": false, "codigoBling": "465257" }
        ]
    },
    {
        "id": 62,
        "nome": "Vestido midi",
        "por": "329,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "G", "imagem": "fotos/vestido_48.jpg", "vendido": false, "codigoBling": "464017" }
        ]
    },
    {
        "id": 63,
        "nome": "Vestido midi",
        "por": "289,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "M", "imagem": "fotos/vestido_49.jpg", "vendido": false, "codigoBling": "463850" },
            { "cor": "Azul", "tamanho": "GG", "imagem": "fotos/vestido_49.jpg", "vendido": false, "codigoBling": "463852" }
        ]
    },
    {
        "id": 64,
        "nome": "Vestido midi",
        "por": "319,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "54", "imagem": "fotos/vestido_50pre.jpg", "vendido": false, "codigoBling": "465254" },
            { "cor": "Verde", "tamanho": "48", "imagem": "fotos/vestido_50ver.jpg", "vendido": false, "codigoBling": "465251" },
            { "cor": "Verde", "tamanho": "52", "imagem": "fotos/vestido_50ver.jpg", "vendido": false, "codigoBling": "465253" }
        ]
    },
    {
        "id": 65,
        "nome": "Vestido longo",
        "por": "289,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Rosa", "tamanho": "44", "imagem": "fotos/vestido_51.jpg", "vendido": false, "codigoBling": "464235" }
        ]
    },
    {
        "id": 67,
        "nome": "Vestido midi",
        "por": "199,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "Único slim", "imagem": "fotos/vestido_52mar.jpg", "vendido": false, "codigoBling": "465637" },
            { "cor": "Preto", "tamanho": "Único slim", "imagem": "fotos/vestido_52pre.jpg", "vendido": false, "codigoBling": "465637" },
            { "cor": "Bege", "tamanho": "Único slim", "imagem": "fotos/vestido_52beg.jpg", "vendido": false, "codigoBling": "465637" }
        ]
    },
    {
        "id": 68,
        "nome": "Vestido longo",
        "por": "239,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "Único slim", "imagem": "fotos/vestido_53.jpg", "vendido": true, "codigoBling": "465086" }
        ]
    },
    {
        "id": 69,
        "nome": "Vestido midi",
        "por": "229,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Amarelo", "tamanho": "46", "imagem": "fotos/vestido_54.jpg", "vendido": false, "codigoBling": "460998" }
        ]
    },
    {
        "id": 70,
        "nome": "Vestido midi",
        "por": "199,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "46", "imagem": "fotos/vestido_55.jpg", "vendido": false, "codigoBling": "464887" },
            { "cor": "Azul", "tamanho": "50", "imagem": "fotos/vestido_55.jpg", "vendido": false, "codigoBling": "464889" }
        ]
    },
    {
        "id": 71,
        "nome": "Vestido midi",
        "por": "199,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Amarelo", "tamanho": "44", "imagem": "fotos/vestido_56.jpg", "vendido": false, "codigoBling": "464527" },
            { "cor": "Amarelo", "tamanho": "46", "imagem": "fotos/vestido_56.jpg", "vendido": false, "codigoBling": "464528" },
            { "cor": "Amarelo", "tamanho": "48", "imagem": "fotos/vestido_56.jpg", "vendido": false, "codigoBling": "464529" }
        ]
    },
    {
        "id": 72,
        "nome": "Vestido midi",
        "por": "299,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Amarelo", "tamanho": "46", "imagem": "fotos/vestido_57.jpg", "vendido": false, "codigoBling": "463550" }
        ]
    },
    {
        "id": 73,
        "nome": "Vestido curto",
        "por": "299,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Rosa", "tamanho": "48", "imagem": "fotos/vestido_58.jpg", "vendido": false, "codigoBling": "464262" },
            { "cor": "Rosa", "tamanho": "48", "imagem": "fotos/vestido_58.jpg", "vendido": false, "codigoBling": "464262" },
            { "cor": "Rosa", "tamanho": "52", "imagem": "fotos/vestido_58.jpg", "vendido": false, "codigoBling": "464264" }
        ]
    },
    {
        "id": 74,
        "nome": "Vestido midi",
        "por": "329,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Verde", "tamanho": "50", "imagem": "fotos/vestido_59ver.jpg", "vendido": false, "codigoBling": "464379" },
            { "cor": "Azul", "tamanho": "52", "imagem": "fotos/vestido_59az.jpg", "vendido": false, "codigoBling": "464380" }
        ]
    },
    {
        "id": 75,
        "nome": "Blusa detalhe manga",
        "por": "189,90",
        "destaque": false,
        "novidade": true,
        "variantes": [
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/blusa_1beg.jpg", "vendido": false, "codigoBling": "465876" },
            { "cor": "Bege", "tamanho": "50", "imagem": "fotos/blusa_1beg.jpg", "vendido": false, "codigoBling": "465877" },
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/blusa_1beg2.jpg", "vendido": false, "codigoBling": "465876" },
            { "cor": "Bege", "tamanho": "50", "imagem": "fotos/blusa_1beg2.jpg", "vendido": false, "codigoBling": "465877" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/blusa_1pre.jpg", "vendido": false, "codigoBling": "465875" }
        ]
    },
    {
        "id": 76,
        "nome": "Calça sarja",
        "por": "249,90",
        "destaque": false,
        "novidade": true,
        "variantes": [
            { "cor": "Preto", "tamanho": "44", "imagem": "fotos/calca_1.jpg", "vendido": false, "codigoBling": "465860" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/calca_1.jpg", "vendido": false, "codigoBling": "465861" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/calca_1.jpg", "vendido": false, "codigoBling": "465863" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/calca_1.jpg", "vendido": false, "codigoBling": "465862" }
        ]
    },
    {
        "id": 77,
        "nome": "Blusa detalhe laise",
        "por": "197,90",
        "destaque": false,
        "novidade": true,
        "variantes": [
            { "cor": "Branco", "tamanho": "44", "imagem": "fotos/blusa_2.jpg", "vendido": false, "codigoBling": "465888" },
            { "cor": "Branco", "tamanho": "46", "imagem": "fotos/blusa_2.jpg", "vendido": false, "codigoBling": "465889" },
            { "cor": "Branco", "tamanho": "48", "imagem": "fotos/blusa_2.jpg", "vendido": false, "codigoBling": "465890" },
            { "cor": "Branco", "tamanho": "44", "imagem": "fotos/blusa_2f2.jpg", "vendido": false, "codigoBling": "465888" },
            { "cor": "Branco", "tamanho": "46", "imagem": "fotos/blusa_2f2.jpg", "vendido": false, "codigoBling": "465889" },
            { "cor": "Branco", "tamanho": "48", "imagem": "fotos/blusa_2f2.jpg", "vendido": false, "codigoBling": "465890" }
        ]
    },
    {
        "id": 78,
        "nome": "Blusa decote V",
        "por": "217,90",
        "destaque": false,
        "novidade": true,
        "variantes": [
            { "cor": "Branco (Off White)", "tamanho": "46", "imagem": "fotos/blusa_3off.jpg", "vendido": false, "codigoBling": "465880" },
            { "cor": "Branco (Off White)", "tamanho": "48", "imagem": "fotos/blusa_3off.jpg", "vendido": false, "codigoBling": "465881" },
            { "cor": "Branco (Off White)", "tamanho": "50", "imagem": "fotos/blusa_3off.jpg", "vendido": false, "codigoBling": "465882" },
            { "cor": "Branco (Off White)", "tamanho": "46", "imagem": "fotos/blusa_3off2.jpg", "vendido": false, "codigoBling": "465880" },
            { "cor": "Branco (Off White)", "tamanho": "48", "imagem": "fotos/blusa_3off2.jpg", "vendido": false, "codigoBling": "465881" },
            { "cor": "Branco (Off White)", "tamanho": "50", "imagem": "fotos/blusa_3off2.jpg", "vendido": false, "codigoBling": "465882" },
            { "cor": "Azul marinho", "tamanho": "44", "imagem": "fotos/blusa_3az.jpg", "vendido": false, "codigoBling": "465879" },
            { "cor": "Azul marinho", "tamanho": "46", "imagem": "fotos/blusa_3az.jpg", "vendido": false, "codigoBling": "465880" }
        ]
    },
    {
        "id": 79,
        "nome": "Calça pantalona",
        "por": "287,90",
        "destaque": false,
        "novidade": true,
        "variantes": [
            { "cor": "Branco (Off White)", "tamanho": "46", "imagem": "fotos/calca_2.jpg", "vendido": false, "codigoBling": "465856" },
            { "cor": "Branco (Off White)", "tamanho": "48", "imagem": "fotos/calca_2.jpg", "vendido": false, "codigoBling": "465857" },
            { "cor": "Branco (Off White)", "tamanho": "50", "imagem": "fotos/calca_2.jpg", "vendido": false, "codigoBling": "465858" },
            { "cor": "Branco (Off White)", "tamanho": "46", "imagem": "fotos/calca_2ft2.jpg", "vendido": false, "codigoBling": "465856" },
            { "cor": "Branco (Off White)", "tamanho": "48", "imagem": "fotos/calca_2ft2.jpg", "vendido": false, "codigoBling": "465857" },
            { "cor": "Branco (Off White)", "tamanho": "50", "imagem": "fotos/calca_2ft2.jpg", "vendido": false, "codigoBling": "465858" }
        ]
    },
    {
        "id": 80,
        "nome": "Blusa detalhe gola",
        "por": "189,90",
        "destaque": false,
        "novidade": true,
        "variantes": [
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/blusa_4beg.jpg", "vendido": false, "codigoBling": "465870" },
            { "cor": "Bege", "tamanho": "50", "imagem": "fotos/blusa_4beg.jpg", "vendido": false, "codigoBling": "465872" },
            { "cor": "Azul marinho", "tamanho": "48", "imagem": "fotos/blusa_4az.jpg", "vendido": false, "codigoBling": "465871" },
            { "cor": "Azul marinho", "tamanho": "52", "imagem": "fotos/blusa_4az.jpg", "vendido": false, "codigoBling": "465873" }
        ]
    },
    {
        "id": 81,
        "nome": "Conjunto zíper",
        "por": "427,90",
        "destaque": false,
        "novidade": true,
        "variantes": [
            { "cor": "Cinza", "tamanho": "46", "imagem": "fotos/conjunto_2.jpg", "vendido": false, "codigoBling": "465884" },
            { "cor": "Cinza", "tamanho": "48", "imagem": "fotos/conjunto_2.jpg", "vendido": false, "codigoBling": "465885" }
            , { "cor": "Cinza", "tamanho": "50", "imagem": "fotos/conjunto_2.jpg", "vendido": false, "codigoBling": "465886" },
        ]
    },
    {
        "id": 82,
        "nome": "Blusa",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "50", "imagem": "fotos/blusa_5.jpg", "vendido": false, "codigoBling": "464756" }
        ]
    },
    {
        "id": 83,
        "nome": "Blusa estampada",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "50", "imagem": "fotos/blusa_6.jpg", "vendido": false, "codigoBling": "463373" }
        ]
    },
    {
        "id": 84,
        "nome": "Blusa detalhes decote",
        "por": "139,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Terracota", "tamanho": "48", "imagem": "fotos/blusa_7ter.jpg", "vendido": false, "codigoBling": "462968" }
        ]
    },
    {
        "id": 85,
        "nome": "Regata",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Vermelho", "tamanho": "48", "imagem": "fotos/regata_1.jpg", "vendido": false, "codigoBling": "464351" },
            { "cor": "Vermelho", "tamanho": "50", "imagem": "fotos/regata_1.jpg", "vendido": false, "codigoBling": "464352" }
        ]
    },
    {
        "id": 86,
        "nome": "Blusa Gola Detalhada",
        "por": "209,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "46", "imagem": "fotos/blusa_8.jpg", "vendido": false, "codigoBling": "465339" },
            { "cor": "Bordô", "tamanho": "52", "imagem": "fotos/blusa_8.jpg", "vendido": false, "codigoBling": "465342" }
        ]
    },
    {
        "id": 87,
        "nome": "Blusa Estampada",
        "por": "149,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "50", "imagem": "fotos/blusa_9.jpg", "vendido": true, "codigoBling": "465293" },
            { "cor": "Bordô", "tamanho": "54", "imagem": "fotos/blusa_9.jpg", "vendido": false, "codigoBling": "465295" }
        ]
    },
    {
        "id": 88,
        "nome": "Blusa Estampada",
        "por": "149,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/blusa_10.jpg", "vendido": false, "codigoBling": "465027" },
            { "cor": "Bege", "tamanho": "48", "imagem": "fotos/blusa_10.jpg", "vendido": false, "codigoBling": "465028" },
            { "cor": "Bege", "tamanho": "50", "imagem": "fotos/blusa_10.jpg", "vendido": false, "codigoBling": "465029" }
        ]
    },
    {
        "id": 89,
        "nome": "Blusa Decote Geo",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul petróleo", "tamanho": "54", "imagem": "fotos/blusa_11.jpg", "vendido": false, "codigoBling": "463380" }
        ]
    },
    {
        "id": 90,
        "nome": "Blusa detalhe alça",
        "por": "139,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "46", "imagem": "fotos/blusa_12.jpg", "vendido": false, "codigoBling": "463337" }
        ]
    },
    {
        "id": 90,
        "nome": "Blusa detalhe frontal",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/blusa_13.jpg", "vendido": false, "codigoBling": "461320" }
        ]
    },
    {
        "id": 91,
        "nome": "Body",
        "por": "119,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "Único", "imagem": "fotos/body_1.jpg", "vendido": false, "codigoBling": "465612" }
        ]
    },
    {
        "id": 92,
        "nome": "Blusa Bababos",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/blusa_15pre.jpg", "vendido": false, "codigoBling": "463448" }
        ]
    },
    {
        "id": 93,
        "nome": "Blusa",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "46", "imagem": "fotos/blusa_14az.jpg", "vendido": false, "codigoBling": "463605" },
            { "cor": "Branco", "tamanho": "52", "imagem": "fotos/blusa_14bra.jpg", "vendido": false, "codigoBling": "463608" }
        ]
    },
    {
        "id": 94,
        "nome": "Blusa Flor",
        "por": "199,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "46", "imagem": "fotos/blusa_17.jpg", "vendido": false, "codigoBling": "465333" },
            { "cor": "Branco", "tamanho": "50", "imagem": "fotos/blusa_17.jpg", "vendido": false, "codigoBling": "465335" }
        ]
    },
    {
        "id": 95,
        "nome": "Blusa detalhe ombro",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Amarelo", "tamanho": "46", "imagem": "fotos/blusa_15.jpg", "vendido": false, "codigoBling": "463441" }
        ]
    },
    {
        "id": 96,
        "nome": "Blusa Gota",
        "por": "189,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bordô", "tamanho": "44", "imagem": "fotos/blusa_16.jpg", "vendido": false, "codigoBling": "464852" }
        ]
    },
    {
        "id": 98,
        "nome": "Blusa Babado",
        "por": "197,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Vermelho", "tamanho": "46", "imagem": "fotos/blusa_18.jpg", "vendido": false, "codigoBling": "464228" },
            { "cor": "Vermelho", "tamanho": "54", "imagem": "fotos/blusa_18.jpg", "vendido": false, "codigoBling": "464230" }
        ]
    },
    {
        "id": 99,
        "nome": "Blusa Babado Transversal",
        "por": "187,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "50", "imagem": "fotos/blusa_19.jpg", "vendido": false, "codigoBling": "465892" }
        ]
    },
    {
        "id": 100,
        "nome": "Calça pantalona",
        "por": "129,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "GG", "imagem": "fotos/calca_3az.jpg", "vendido": false, "codigoBling": "463654" },
            { "cor": "Verde", "tamanho": "GG", "imagem": "fotos/calca_3ver.jpg", "vendido": false, "codigoBling": "463654" },
            { "cor": "Rosa", "tamanho": "GG", "imagem": "fotos/calca_3ros.jpg", "vendido": false, "codigoBling": "463654" }
        ]
    },
    {
        "id": 101,
        "nome": "Calça pantalona",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "54", "imagem": "fotos/calca_4beg.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Azul marinho", "tamanho": "48", "imagem": "fotos/calca_4azma.jpg", "vendido": false, "codigoBling": "464866" },
            { "cor": "Preto", "tamanho": "46", "imagem": "fotos/calca_4pre.jpg", "vendido": false, "codigoBling": "464865" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/calca_4pre.jpg", "vendido": false, "codigoBling": "464866" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/calca_4pre.jpg", "vendido": false, "codigoBling": "464867" },
            { "cor": "Preto", "tamanho": "54", "imagem": "fotos/calca_4pre.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Fúcsia", "tamanho": "52", "imagem": "fotos/calca_4fuc.jpg", "vendido": false, "codigoBling": "465318" },
            { "cor": "Verde", "tamanho": "46", "imagem": "fotos/calca_4vercla.jpg", "vendido": false, "codigoBling": "464865" },
            { "cor": "Verde", "tamanho": "54", "imagem": "fotos/calca_4vercla.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "cor": "Marrom", "tamanho": "52", "imagem": "fotos/calca_4mar.jpg", "vendido": false, "codigoBling": "465318" }
        ]
    },
    {
        "id": 102,
        "nome": "Calça reta",
        "por": "289,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Cinza", "tamanho": "46", "imagem": "fotos/calca_5.jpg", "vendido": false, "codigoBling": "459446" }
        ]
    },
    {
        "id": 103,
        "nome": "Calça pantalona",
        "por": "279,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "54", "imagem": "fotos/calca_6.jpg", "vendido": false, "codigoBling": "462362" }
        ]
    },
    {
        "id": 104,
        "nome": "Calça pantalona",
        "por": "279,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "54", "imagem": "fotos/calca_7.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": 105,
        "nome": "Calça pantalona",
        "por": "189,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "M(slim)", "imagem": "fotos/calca_9mar.jpg", "vendido": false, "codigoBling": "465096" },
            { "cor": "Marrom", "tamanho": "G(slim)", "imagem": "fotos/calca_9mar.jpg", "vendido": false, "codigoBling": "465097" },
            { "cor": "Marrom", "tamanho": "GG(slim)", "imagem": "fotos/calca_9mar.jpg", "vendido": false, "codigoBling": "465098" },
            { "cor": "Preto", "tamanho": "G(slim)", "imagem": "fotos/calca_9pre.jpg", "vendido": false, "codigoBling": "465097" },
            { "cor": "Preto", "tamanho": "GG(slim)", "imagem": "fotos/calca_9pre.jpg", "vendido": false, "codigoBling": "465098" }
        ]
    },
    {
        "id": 106,
        "nome": "Calça pantalona",
        "por": "199,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Branco", "tamanho": "46", "imagem": "fotos/calca_10.jpg", "vendido": false, "codigoBling": "461701" }
        ]
    },
    {
        "id": 107,
        "nome": "Calça pantacourt",
        "por": "189,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "50", "imagem": "fotos/calca_11beg.jpg", "vendido": false, "codigoBling": "463578" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/calca_11pre.jpg", "vendido": false, "codigoBling": "463577" },
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/calca_11pre.jpg", "vendido": false, "codigoBling": "463578" }
        ]
    },
    {
        "id": 108,
        "nome": "Calça pantalona",
        "por": "289,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Branco (Off White)", "tamanho": "46", "imagem": "fotos/calca_12.jpg", "vendido": false, "codigoBling": "463388" },
            { "cor": "Branco (Off White)", "tamanho": "48", "imagem": "fotos/calca_12.jpg", "vendido": false, "codigoBling": "463389" },
            { "cor": "Branco (Off White)", "tamanho": "50", "imagem": "fotos/calca_12.jpg", "vendido": false, "codigoBling": "464246" }
        ]
    },
    {
        "id": 109,
        "nome": "Calça reta linho",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Cru", "tamanho": "42", "imagem": "fotos/calca_13.jpg", "vendido": false, "codigoBling": "465258" },
            { "cor": "Cru", "tamanho": "44", "imagem": "fotos/calca_13.jpg", "vendido": false, "codigoBling": "465259" },
            { "cor": "Cru", "tamanho": "48", "imagem": "fotos/calca_13.jpg", "vendido": false, "codigoBling": "465261" },
            { "cor": "Cru", "tamanho": "50", "imagem": "fotos/calca_13.jpg", "vendido": false, "codigoBling": "465262" }
        ]
    },
    {
        "id": 111,
        "nome": "Conjunto colete e calça",
        "por": "279,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul marinho", "tamanho": "G2", "imagem": "fotos/conjunto_3azma.jpg", "vendido": false, "codigoBling": "465672" },
            { "cor": "Marrrom", "tamanho": "G1", "imagem": "fotos/conjunto_3mar.jpg", "vendido": false, "codigoBling": "465669" }
        ]
    },
    {
        "id": 112,
        "nome": "Conjunto blusa e calça",
        "por": "349,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "50", "imagem": "fotos/conjunto_4.jpg", "vendido": false, "codigoBling": "464910" }
        ]
    },
    {
        "id": 113,
        "nome": "Conjunto blusa e calça",
        "por": "179,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege/Preto", "tamanho": "46", "imagem": "fotos/conjunto_5.jpg", "vendido": false, "codigoBling": "464929" },
            { "cor": "Bege/Preto", "tamanho": "52", "imagem": "fotos/conjunto_5.jpg", "vendido": false, "codigoBling": "464508" },
            { "cor": "Bege/Preto", "tamanho": "54", "imagem": "fotos/conjunto_5.jpg", "vendido": false, "codigoBling": "464509" }
        ]
    },
    {
        "id": 114,
        "nome": "Conjunto blusa e calça",
        "por": "369,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege", "tamanho": "46", "imagem": "fotos/conjunto_6.jpg", "vendido": false, "codigoBling": "462827" }
        ]
    },
    {
        "id": 115,
        "nome": "Conjunto camisa e calça",
        "por": "459,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Terracota", "tamanho": "46", "imagem": "fotos/conjunto_7ter.jpg", "vendido": false, "codigoBling": "464742" },
            { "cor": "Terracota", "tamanho": "48", "imagem": "fotos/conjunto_7ter.jpg", "vendido": false, "codigoBling": "464743" }
        ]
    },
    {
        "id": 116,
        "nome": "Conjunto camisa e calça",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Marrom", "tamanho": "46", "imagem": "fotos/conjunto_8mar.jpg", "vendido": false, "codigoBling": "465596" },
            { "cor": "Terracota", "tamanho": "48", "imagem": "fotos/conjunto_8pre.jpg", "vendido": false, "codigoBling": "465597" },
            { "cor": "Terracota", "tamanho": "50", "imagem": "fotos/conjunto_8pre.jpg", "vendido": false, "codigoBling": "465598" }
        ]
    },
    {
        "id": 117,
        "nome": "Conjunto camisa e calça",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Azul", "tamanho": "48", "imagem": "fotos/conjunto_9az.jpg", "vendido": false, "codigoBling": "465407" },
            { "cor": "Preto", "tamanho": "48", "imagem": "fotos/conjunto_9pre.jpg", "vendido": false, "codigoBling": "465407" }
        ]
    },
    {
        "id": 118,
        "nome": "Conjunto moletinho",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Bege/Preto", "tamanho": "G2", "imagem": "fotos/conjunto_10.jpg", "vendido": false, "codigoBling": "465158" }
        ]
    },
    {
        "id": 119,
        "nome": "Conjunto colete e saia",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "Preto", "tamanho": "G1", "imagem": "fotos/conjunto_11pre.jpg", "vendido": false, "codigoBling": "465582" },
            { "cor": "Marrom", "tamanho": "G1", "imagem": "fotos/conjunto_11mar.jpg", "vendido": false, "codigoBling": "465581" },
            { "cor": "Marrom", "tamanho": "G2", "imagem": "fotos/conjunto_11mar.jpg", "vendido": false, "codigoBling": "465660" }
        ]
    },
    {
        "id": 120,
        "nome": "Conjunto blusa e bermuda",
        "por": "249,90",
        "destaque": false,
        "novidade": false,
        "variantes": [
            { "cor": "bege", "tamanho": "G(Slim)", "imagem": "fotos/conjunto_12.jpg", "vendido": false, "codigoBling": "465000" },
            { "cor": "Bege", "tamanho": "G(Slim)", "imagem": "fotos/conjunto_12ft2.jpg", "vendido": false, "codigoBling": "465000" }
        ]
    }
];

const produtosLiquidacao = [
    {
        "id": "liq_2",
        "nome": "Vestido",
        "de": "280",
        "por": "137",
        "desconto": 51,
        "variantes": [
            { "tamanho": "40", "imagem": "fotosliq/vestido_47.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "42", "imagem": "fotosliq/vestido_47.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "44", "imagem": "fotosliq/vestido_47.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "46", "imagem": "fotosliq/vestido_47.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/vestido_47.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_3",
        "nome": "Cropped",
        "de": "190,00",
        "por": "76",
        "desconto": 60,
        "variantes": [
            { "tamanho": "G1", "imagem": "fotosliq/cropped_4.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_5",
        "nome": "Vestido",
        "de": "330,00",
        "por": "147",
        "desconto": 55,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/vestido_46.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/vestido_46.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_6",
        "nome": "Vestido",
        "de": "160,00",
        "por": "96",
        "desconto": 40,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/vestido_29.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/vestido_29.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_29.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_7",
        "nome": "Vestido",
        "de": "340,00",
        "por": "119",
        "desconto": 65,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_45.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_8",
        "nome": "Vestido",
        "de": "390,00",
        "por": "195",
        "desconto": 50,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/vestido_2.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/vestido_2.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_9",
        "nome": "Biquíni",
        "de": "180,00",
        "por": "72",
        "desconto": 60,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/biquini_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/biquini_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_10",
        "nome": "Conjunto",
        "de": "160,00",
        "por": "128",
        "desconto": 20,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/conjunto_8.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/conjunto_8.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/conjunto_8.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_12",
        "nome": "Conjunto",
        "de": "250,00",
        "por": "125",
        "desconto": 50,
        "variantes": [
            { "tamanho": "G slim", "imagem": "fotosliq/conjunto_6.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_13",
        "nome": "Vestido",
        "de": "170,00",
        "por": "85",
        "desconto": 50,
        "variantes": [
            { "tamanho": "38", "imagem": "fotosliq/vestido_42.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "40", "imagem": "fotosliq/vestido_42.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "42", "imagem": "fotosliq/vestido_42.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_14",
        "nome": "Vestido",
        "de": "260,00",
        "por": "104",
        "desconto": 60,
        "variantes": [
            { "tamanho": "M slim", "imagem": "fotosliq/vestido_40.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_15",
        "nome": "Blusa",
        "de": "119,90",
        "por": "60",
        "desconto": 50,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/blusa_17.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_16",
        "nome": "Vestido",
        "de": "250,00",
        "por": "87",
        "desconto": 65,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_39.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_39.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_17",
        "nome": "Macaquinho",
        "de": "230,00",
        "por": "149",
        "desconto": 35,
        "variantes": [
            { "tamanho": "G1", "imagem": "fotosliq/macacuinho_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "G2", "imagem": "fotosliq/macacuinho_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "G3", "imagem": "fotosliq/macacuinho_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_18",
        "nome": "Blusa",
        "de": "250,00",
        "por": "99",
        "desconto": 60,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/blusa_14.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/blusa_14.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_19",
        "nome": "Blusa",
        "de": "120,00",
        "por": "59",
        "desconto": 50,
        "variantes": [
            { "tamanho": "G2", "imagem": "fotosliq/blusa_12.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "G3", "imagem": "fotosliq/blusa_12.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_20",
        "nome": "Vestido",
        "de": "350,00",
        "por": "136",
        "desconto": 60,
        "variantes": [
            { "tamanho": "EG", "imagem": "fotosliq/vestido_36.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "G1", "imagem": "fotosliq/vestido_36.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_21",
        "nome": "Vestido",
        "de": "350,00",
        "por": "157",
        "desconto": 55,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/vestido_37.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_22",
        "nome": "Calça",
        "de": "330,00",
        "por": "148",
        "desconto": 55,
        "variantes": [
            { "tamanho": "52", "imagem": "fotosliq/calca_3.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_23",
        "nome": "Vestido",
        "de": "320,00",
        "por": "224",
        "desconto": 30,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_34.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_24",
        "nome": "Vestido",
        "de": "400,00",
        "por": "97",
        "desconto": 75,
        "variantes": [
            { "tamanho": "44", "imagem": "fotosliq/vestido_30.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "46", "imagem": "fotosliq/vestido_30.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_25",
        "nome": "Vestido",
        "de": "250,00",
        "por": "99",
        "desconto": 60,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_32.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_26",
        "nome": "Conjunto",
        "de": "400,00",
        "por": "197",
        "desconto": 51,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/conjunto_4.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/conjunto_4.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_27",
        "nome": "Vestido",
        "de": "420,00",
        "por": "294",
        "desconto": 30,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/vestido_26.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/vestido_26.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_29",
        "nome": "Macacão",
        "de": "280,00",
        "por": "139",
        "desconto": 50,
        "variantes": [
            { "tamanho": "GG", "imagem": "fotosliq/macacao_2.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_30",
        "nome": "Cropped",
        "de": "140,00",
        "por": "63",
        "desconto": 55,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/cropped_3.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/cropped_3.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/cropped_3.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/cropped_3.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "54", "imagem": "fotosliq/cropped_3.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_31",
        "nome": "Calça",
        "de": "160,00",
        "por": "79",
        "desconto": 51,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/calca_2.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_32",
        "nome": "Vestido",
        "de": "380,00",
        "por": "187",
        "desconto": 51,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/vestido_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_33",
        "nome": "Blusa",
        "de": "170,00",
        "por": "76",
        "desconto": 55,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/blusa_2.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/blusa_2.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_34",
        "nome": "Blusa",
        "de": "190,00",
        "por": "95",
        "desconto": 50,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/blusa_3.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/blusa_3.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_35",
        "nome": "Vestido",
        "de": "190,00",
        "por": "85",
        "desconto": 55,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_4.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_4.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_36",
        "nome": "Vestido",
        "de": "250,00",
        "por": "125",
        "desconto": 50,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/vestido_5.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/vestido_5.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_37",
        "nome": "Blusa",
        "de": "190,00",
        "por": "95",
        "desconto": 50,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/blusa_4.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_38",
        "nome": "Vestido",
        "de": "370,00",
        "por": "144",
        "desconto": 60,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/vestido_6.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/vestido_6.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_39",
        "nome": "Conjunto",
        "de": "250,00",
        "por": "125",
        "desconto": 50,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/conjunto_1.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/conjunto_1.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_40",
        "nome": "Blusa",
        "de": "190,00",
        "por": "95",
        "desconto": 50,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/blusa_5.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_41",
        "nome": "Vestido",
        "de": "370,00",
        "por": "148",
        "desconto": 60,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_7.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_7.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/vestido_7.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_42",
        "nome": "Vestido",
        "de": "330,00",
        "por": "165",
        "desconto": 50,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_8.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_8.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_43",
        "nome": "Macacão",
        "de": "480,00",
        "por": "192",
        "desconto": 60,
        "variantes": [
            { "tamanho": "52", "imagem": "fotosliq/macacao_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "54", "imagem": "fotosliq/macacao_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_44",
        "nome": "Vestido",
        "de": "390,00",
        "por": "175",
        "desconto": 55,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/vestido_9.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/vestido_9.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_9.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_45",
        "nome": "Vestido",
        "de": "350,00",
        "por": "175",
        "desconto": 50,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/vestido_12.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_46",
        "nome": "Vestido",
        "de": "380,00",
        "por": "187",
        "desconto": 51,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_13.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_47",
        "nome": "Vestido",
        "de": "350,00",
        "por": "175",
        "desconto": 50,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_14.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_14.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_48",
        "nome": "Blusa",
        "de": "250,00",
        "por": "125",
        "desconto": 50,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/blusa_6.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/blusa_6.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_49",
        "nome": "Vestido",
        "de": "360,00",
        "por": "144",
        "desconto": 60,
        "variantes": [
            { "tamanho": "44", "imagem": "fotosliq/vestido_15.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_50",
        "nome": "Blusa",
        "de": "320,00",
        "por": "128",
        "desconto": 60,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/blusa_7.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_51",
        "nome": "Vestido",
        "de": "300,00",
        "por": "147",
        "desconto": 51,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_16.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_16.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/vestido_16.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_52",
        "nome": "Blusa",
        "de": "119,00",
        "por": "60",
        "desconto": 50,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/blusa_8.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_53",
        "nome": "Colete",
        "de": "200,00",
        "por": "99",
        "desconto": 50,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/colete_1.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/colete_1.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_54",
        "nome": "Vestido",
        "de": "470,00",
        "por": "188",
        "desconto": 60,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/vestido_20.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_55",
        "nome": "Vestido",
        "de": "180,00",
        "por": "90",
        "desconto": 50,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/vestido_21.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/vestido_21.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_56",
        "nome": "Blusa",
        "de": "140,00",
        "por": "42",
        "desconto": 70,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/blusa_9.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/blusa_9.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_57",
        "nome": "Conjunto",
        "de": "190,00",
        "por": "95",
        "desconto": 50,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/conjunto_3.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_58",
        "nome": "Calça",
        "de": "200,00",
        "por": "97",
        "desconto": 52,
        "variantes": [
            { "tamanho": "44", "imagem": "fotosliq/calca_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "46", "imagem": "fotosliq/calca_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_59",
        "nome": "Body",
        "de": "99,90",
        "por": "50",
        "desconto": 50,
        "variantes": [
            { "tamanho": "GG", "imagem": "fotosliq/body_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_60",
        "nome": "Short",
        "de": "199,00",
        "por": "58",
        "desconto": 70,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/short_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/short_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_61",
        "nome": "Short",
        "de": "190,00",
        "por": "76",
        "desconto": 60,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/short_renda.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/short_renda.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/short_renda.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_62",
        "nome": "Colete",
        "de": "180,00",
        "por": "87",
        "desconto": 52,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/colete_2.jpg", "vendido": true, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/colete_2.jpg", "vendido": true, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_63",
        "nome": "Cropped",
        "de": "180,00",
        "por": "54",
        "desconto": 70,
        "variantes": [
            { "tamanho": "50", "imagem": "fotosliq/cropped_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "52", "imagem": "fotosliq/cropped_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_64",
        "nome": "Cropped",
        "de": "180,00",
        "por": "54",
        "desconto": 70,
        "variantes": [
            { "tamanho": "46", "imagem": "fotosliq/cropped_2.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "48", "imagem": "fotosliq/cropped_2.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_65",
        "nome": "Vestido",
        "de": "390,00",
        "por": "117",
        "desconto": 70,
        "variantes": [
            { "tamanho": "G1", "imagem": "fotosliq/vestido_22.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "G2", "imagem": "fotosliq/vestido_22.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_66",
        "nome": "Short saia",
        "de": "170,00",
        "por": "59",
        "desconto": 65,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/short_saia_1.jpg", "vendido": false, "codigoBling": "FALTA" },
            { "tamanho": "50", "imagem": "fotosliq/short_saia_1.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    },
    {
        "id": "liq_67",
        "nome": "Short",
        "de": "260,00",
        "por": "97",
        "desconto": 63,
        "variantes": [
            { "tamanho": "48", "imagem": "fotosliq/short_3.jpg", "vendido": false, "codigoBling": "FALTA" }
        ]
    }
];