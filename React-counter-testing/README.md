

-- guide used to setup and configure jest with react testing library 
https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl

-- notes, in bable rc
-- need to add ["@babel/preset-react", {"runtime": "automatic"}]


React 18 bug
-- apparently useMemo and useCallback will still fire off twice because a fundamental change to react 18 is that it mounts / unmounts and then mounts again for some future change.