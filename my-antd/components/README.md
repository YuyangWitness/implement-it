## 1. 为什么要用hook
- class组件很难复用状态逻辑，通常使用HOC和render props解决，但是用hook更加简洁
- 复杂组件难以理解，尤其是生命周期中的太多复杂逻辑
- React组件一直是函数，使用hook完全拥抱函数

## 2. useEffect的执行顺序
- 刚创建组件执行useEffect = ComponentDidMounted
- Update组件 render component -> useEffect return 函数 -> useEffect函数执行

## 3. Hook规则
- 只在最顶层使用Hook，不要在循环、条件中使用Hook
- 只在React函数中调用Hook

## 4. 其他Hook
- useMemo
- useReducer
- useCallback