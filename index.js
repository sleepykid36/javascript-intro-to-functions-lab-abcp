function shout(string) {
  spy = expect.spyOn(console, 'log').andCallThrough()
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

function logShout(string) {
  if(string.toUpperCase === string)
    console.log()
  }

function logWhisper(string) {
  if (string === lowercase)
  console.log()
}

function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
      return "I can't hear you!"
  } else if(string.toUpperCase() === string) {
      return "YES INDEED!"
  } else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}