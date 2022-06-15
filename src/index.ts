import { Keypair } from '@mogami/keypair'

const vanity = (text: string, count: number) => {
  let found = 0
  let counter = 0
  while (found < count) {
    if (counter % 10000 === 0) {
      console.log(`Counter ${counter} `)
    }
    const { mnemonic, publicKey } = Keypair.random()
    if (publicKey.toLowerCase().startsWith(text.toLowerCase())) {
      found++
      console.log('Found', { publicKey, mnemonic })
    }
    counter++
  }
}

vanity('tmas', 10)
