## About:

Demonstrates a failure of Parcel to build React components that are not in the same directory.

## Usage:

`yarn install` in both `build-dir` and `other-dir`.

Open `/build-dir/index.js` and see that there are two imports. One is from the same directory and the other is from a parent directory. The component from the parent directory fails with an error about React hooks:

```
react.development.js:1590 Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
    at resolveDispatcher (react.development.js:1590)
    at useState (react.development.js:1618)
    at HelloWord (TestComponent.js:29)
    at renderWithHooks (react-dom.development.js:16241)
    at mountIndeterminateComponent (react-dom.development.js:18775)
    at beginWork$1 (react-dom.development.js:20137)
    at HTMLUnknownElement.callCallback (react-dom.development.js:336)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:385)
    at invokeGuardedCallback (react-dom.development.js:440)
    at beginWork$$1 (react-dom.development.js:25738)
```

I'd expect both components to render since they have idential code.