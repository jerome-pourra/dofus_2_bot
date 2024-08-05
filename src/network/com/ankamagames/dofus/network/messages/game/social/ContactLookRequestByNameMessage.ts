import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ContactLookRequestMessage } from "./ContactLookRequestMessage";

export class ContactLookRequestByNameMessage extends ContactLookRequestMessage
{

	public static readonly protocolId: number = 2776;

	public playerName: string = "";

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ContactLookRequestByNameMessage(input);
    }

    private deserializeAs_ContactLookRequestByNameMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerNameFunc(input);
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

}