import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagDailyLoteryMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9352;

	public returnType: number = 0;
	public gameActionId: string = "";

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
        this.deserializeAs_HavenBagDailyLoteryMessage(input);
    }

    private deserializeAs_HavenBagDailyLoteryMessage(input: ICustomDataInput)
    {
        this._returnTypeFunc(input);
        this._gameActionIdFunc(input);
    }

    private _returnTypeFunc(input: ICustomDataInput)
    {
        this.returnType = input.readByte();
        if(this.returnType < 0)
        {
            throw new Error("Forbidden value (" + this.returnType + ") on element of HavenBagDailyLoteryMessage.returnType.");
        }
    }

    private _gameActionIdFunc(input: ICustomDataInput)
    {
        this.gameActionId = input.readUTF();
    }

}