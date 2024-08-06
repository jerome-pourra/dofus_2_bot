import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagDailyLoteryMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9352;

	public returnType: number = 0;
	public gameActionId: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HavenBagDailyLoteryMessage.protocolId;
    }

    public initHavenBagDailyLoteryMessage(returnType: number = 0, gameActionId: string = ""): HavenBagDailyLoteryMessage
    {
        this.returnType = returnType;
        this.gameActionId = gameActionId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HavenBagDailyLoteryMessage(output);
    }

    public serializeAs_HavenBagDailyLoteryMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.returnType);
        output.writeUTF(this.gameActionId);
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