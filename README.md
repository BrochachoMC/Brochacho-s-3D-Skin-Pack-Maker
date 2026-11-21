# BrochachoMC's 3D Skins Maker

App Android para criar **skinpacks 3D** (`.mcpack`) de Minecraft Bedrock no celular.

> **Para usar as skins no jogo é preciso o [Levi Launcher](https://github.com/LiteLDev/LeviLauncher) e o mod 4DSkins.** Veja a seção [Usando no jogo](#usando-no-jogo).

## O que o app faz

- Vários projetos em abas, todos salvos automaticamente no aparelho
- Nome do projeto e versão do pacote
- Para cada skin: nome, textura PNG, modelo 3D `.json`, capa opcional, `hide_armor` e braços finos (Alex)
- Lista com **render 3D** de cada skin; toque para girar e dar zoom
- Mostra as informações dos arquivos (formato, tamanho, ossos, cubos, malhas) e avisa quando algo não bate com os requisitos
- Importa um `.mcpack` existente, em uma aba nova, para continuar editando
- Gera o `.mcpack` com `manifest.json`, `skins.json`, `geometry.json`, texturas e textos de tradução (`.lang`)

## Requisitos dos arquivos

| Arquivo | Requisito |
| --- | --- |
| Modelo | `.json` no formato **Bedrock Legacy Model** (no Blockbench, exporte como Bedrock Legacy Model) |
| Textura | PNG de **128×128** |

Se um arquivo não atender, o app mostra um aviso na tela da skin e no cartão da lista, mas deixa salvar.

## Como usar o app

1. Abra o app e dê um nome ao projeto.
2. Toque em **+ Adicionar skin**.
3. Escolha a **textura** (PNG 128×128) e o **modelo** (`.json` Bedrock Legacy Model). Opcionalmente, escolha uma capa.
4. Dê um nome à skin e marque **Esconder armadura** se quiser (`hide_armor`).
5. Toque em **Salvar skin** e confira o render 3D na lista.
6. Toque em **Gerar .mcpack** e escolha onde salvar ou abrir o arquivo.

Para editar um pacote que você já fez, use **Importar .mcpack**. Ele abre em uma aba nova e a versão sobe sozinha.

## Usando no jogo

As skins 3D só funcionam no jogo com:

1. **Levi Launcher**: [LeviLauncher](https://github.com/LiteLDev/LeviLauncher) (Windows) ou [LeviLaunchroid](https://github.com/LiteLDev/LeviLaunchroid) (Android)
2. **Mod 4DSkins** instalado no launcher

Depois, abra o `.mcpack` gerado pelo app com o jogo aberto pelo launcher. As skins aparecem na seleção de skins, com os nomes que você escolheu.

## Observações

- Os projetos ficam salvos só no aparelho. Se você desinstalar o app ou limpar os dados dele, eles somem. Gere o `.mcpack` dos projetos importantes.
- O APK gerado é uma versão de teste (debug). O Play Protect pode avisar que o app é desconhecido.
- O render 3D do app é uma prévia e pode não ser idêntico ao que aparece no jogo.

## Créditos

Criado por BrochachoMC.
