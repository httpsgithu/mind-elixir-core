/// <reference path="./dom.d.ts" />
/// <reference path="./function.d.ts" />

type operation = {
  name: string
}

interface Theme {
  name: string
  palette: string[]
  cssVar: {
    '--main-color': string
    '--main-bgcolor': string
    '--color': string
    '--bgcolor': string
  }
}

interface MindElixirInstance {
  mindElixirBox: HTMLElement
  nodeData: NodeObj
  linkData: LinkObj
  currentNode: Topic | null
  currentLink: SVGElement | null
  inputDiv: HTMLElement | null
  scaleVal: number
  tempDirection: number | null

  // wip
  bus: {
    addListener: (type, handler) => void
    fire: (type, data) => void
  }

  // wip
  history: operation[]
  isUndo: boolean
  undo: () => void

  theme: Theme
  direction: number
  locale: string
  draggable: boolean
  editable: boolean
  contextMenu: boolean
  contextMenuOption: object
  toolBar: boolean
  keypress: boolean
  before: object
  newTopicName: string
  allowUndo: boolean
  overflowHidden: boolean
  mainLinkStyle: number
  mainNodeHorizontalGap: number
  mainNodeVerticalGap: number
  mobileMenu: boolean

  container: HTMLElement
  map: HTMLElement
  root: HTMLElement
  box: HTMLElement
  lines: SVGElement
  linkController: SVGElement
  P2: HTMLElement
  P3: HTMLElement
  line1: SVGElement
  line2: SVGElement
  linkSvgGroup: SVGElement

  generateNewObj: () => NodeObj
  expandNode: ExpandNode
  createWrapper: CreateWrapper
  createParent: CreateParent
  createChildren: CreateChildren
  createTopic: CreateTopic

  linkDiv: LinkDiv
  judgeDirection: JudgeDirection

  addChild: AddChild
  createInputDiv: CreateInputDiv
  layoutChildren: LayoutChildren

  selectNode: SelectNode

  layout: Layout
}

interface Options {
  el: string | HTMLElement
  data: MindElixirData
  direction?: number
  locale?: string
  draggable?: boolean
  editable?: boolean
  contextMenu?: boolean
  contextMenuOption?: object
  toolBar?: boolean
  keypress?: boolean
  before?: object
  newTopicName?: string
  allowUndo?: boolean
  overflowHidden?: boolean
  mainLinkStyle?: number
  mainNodeHorizontalGap?: number
  mainNodeVerticalGap?: number
  mobileMenu?: boolean
  theme?: Theme
}
interface NodeObj {
  topic: string
  id: string
  style?: {
    fontSize?: string
    color?: string
    background?: string
    fontWeight?: string
  }
  parent?: NodeObj
  children?: NodeObj[]
  tags?: string[]
  icons?: string[]
  hyperLink?: string
  expanded?: boolean
  direction?: number
  root?: boolean
  image?: {
    url: string
    width: number
    height: number
  }
  // main node specific properties
  branchColor?: string
}

type LinkObj = object

interface MindElixirData {
  nodeData: NodeObj
  linkData?: LinkObj
  direction?: number
  theme?: Theme
}
